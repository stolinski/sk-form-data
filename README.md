# SvelteKit Form Data

A middleware that automatically parses your SvelteKit form data for Svelte Form Actions

### Install

`npm install --save sk-form-data`

### Use

```typescript
// hooks.server.ts
import { sequence } from '@sveltejs/kit/hooks'

// Sequence comes from SK and allows you to add many hooks.
// ie. export const handle = sequence(logging, auth, form_data)
export const handle: Handle = sequence(form_data)
```

Now... all of your actions will have a new property in locals

```typescript
// Any generic server file with Sveltekit form actions being used.
// +page.server.ts

export const actions = {
	default: async function ({ locals }) {
		// locals.form_data
		console.log(locals.form_data); // whatever you sent from your form
		// do rest of your stuff
		...
	},
}
```

### Complete Forms Flow

```svelte
<!-- +page.svelte -->

<form use:enhance>
	<label for="title">Title: </label>
	<input name="title" id="title" type="text" value="Scott" />
</form>
```

```typescript
// Any generic server file with Sveltekit form actions being used.
// +page.server.ts
export const actions = {
	default: async function ({ locals }) {
		// locals.form_data
		console.log(locals.form_data); // { title: "Scott" }
		// do rest of your stuff
		...
	},
}
```

## Support my work

https://syntax.fm

A Tasty Treats Podcast for Web Developers.
