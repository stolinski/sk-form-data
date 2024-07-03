import { parseFormData } from "parse-nested-form-data";
export const form_data = async ({ event, resolve }) => {
    // Only look for form data
    const is_action = event.request.headers.get("content-type") === "application/x-www-form-urlencoded";
    if (event.request.method === "POST" && is_action) {
        try {
            // Make a clone to prevent error in already read body
            const request_2 = event.request.clone();
            // Get form data
            const form_data = await request_2.formData();
            // Parse that ish
            const data = parseFormData(form_data);
            // Set it to locals
            event.locals.form_data = data;
        }
        catch (error) {
            console.error("Error parsing form-data:");
            console.error(error);
        }
    }
    return resolve(event);
};
