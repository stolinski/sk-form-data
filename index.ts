import type { Handle } from "@sveltejs/kit";
import { parseFormData } from "parse-nested-form-data";

export const form_data: Handle = async ({ event, resolve }) => {
  const content_type = event.request.headers.get("content-type");
  // Only look for form data
  if (event.request.method === "POST" && content_type?.includes("form-data")) {
    try {
      // Make a clone to prevent error in already read body
      const request_2 = event.request.clone();
      // Get form data
      const form_data = await request_2.formData();
      // Parse that ish
      const data = parseFormData(form_data);
      // Set it to locals
      event.locals.form_data = data;
    } catch (error) {
      console.error("Error parsing form-data:");
      console.error(error);
    }
  }
  return resolve(event);
};
