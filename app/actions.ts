"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

export type RsvpFormState = {
  success: boolean;
  errors?: {
    name?: string[];
    attendance?: string[];
    kidCount?: string[];
    message?: string[];
    _form?: string[];
  };
};

const rsvpSchema = z.object({
  name: z.string().trim().min(1, "Please enter your child's name"),
  attendance: z.preprocess(
    (value) => (value === "yes" ? true : value === "no" ? false : undefined),
    z.boolean("Please select whether your child will attend"),
  ),
  kidCount: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z
      .number("Please enter a valid number")
      .int("Please enter a whole number")
      .positive("Please enter a positive number")
      .optional(),
  ),
  message: z.string().optional(),
});

export async function submitRsvp(
  preState: RsvpFormState,
  formData: FormData,
): Promise<RsvpFormState> {
  //Step 1: Validation
  const result = rsvpSchema.safeParse({
    name: formData.get("name"),
    attendance: formData.get("attendance"),
    kidCount: formData.get("kidCount"),
    message: formData.get("message"),
  });
  if (!result.success) {
    return {
      success: false,
      errors: z.flattenError(result.error).fieldErrors,
    };
  }

  //Step 2: Database Submission
  const supabase = await createClient();
  const { data, error } = await supabase.from("rsvps").insert({
    name: result.data.name,
    attending: result.data.attendance,
    guest_count: result.data.kidCount ?? 0,
    message: result.data.message ?? null,
  });

  //Step 3: Database Error Handling
  if (error) {
    console.error("Supabase insert error:", error);
    return {
      success: false,
      errors: { _form: ["Something went wrong. Please try again."] },
    };
  }

  return {
    success: true,
  };
}
