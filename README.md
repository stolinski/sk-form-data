# SvelteKit Form Data

[![install size](https://packagephobia.com/badge?p=sk-form-data)](https://packagephobia.com/result?p=sk-form-data)

A middleware that automatically parses your SvelteKit form data for use with [SvelteKit form actions](https://kit.svelte.dev/docs/form-actions).

## Why?

This reduces form validation boilerplate and works great with a schema validation library like [Zod](https://zod.dev/). 

![image](https://user-images.githubusercontent.com/38083522/218318411-5eed31f3-9f58-4a36-97e4-d47bbba0e893.png)


## Setup

### Install

You can use a package manager of your choice but `npm` is used by default.

```bash
npm i sk-form-data
```

Note to **pnpm** users: **pnpm** doesn't automatically install peer dependencies, so you might have to include `@remix-run/web-file` yourself with `pnpm i @remix-run/web-file`. 

### Add Middleware

Add `form_data` to your other hooks inside `hooks.server.ts`. If you have existing hooks you can use `sequence` from SvelteKit to add more hooks. 

```typescript
// hooks.server.ts

import { sequence } from '@sveltejs/kit/hooks'
import { form_data } from 'sk-form-data'

export const handle = sequence(form_data)
```

### Use Inside Actions

Your form actions will have a new `form_data` property in `locals`.

```ts
// +page.server.ts

export const actions = {
	default: async function ({ locals }) {
		console.log(locals.form_data); // whatever you sent from your form
		// do rest of your stuff...
	},
}
```

## Example

Use a form as you would in SvelteKit but keep in mind you can only use the `POST` method.

```svelte
<!-- +page.svelte -->

<script lang="ts">
	import { enhance } from '$app/forms'
</script>

<form method="POST" use:enhance>
	<label for="title">Title: </label>
	<input name="title" id="title" type="text" value="Scott" />
</form>
```

Inside your form actions you have access to the parsed form data inside `locals.form_data` you can pass to a function that transforms values based on your Zod schema for example.

```typescript
// +page.server.ts

export const actions = {
	default: async function ({ locals }) {
		console.log(locals.form_data); // whatever you sent from your form
		// do rest of your stuff...
	},
}
```

## Support My Work

https://syntax.fm

A Tasty Treats Podcast for Web Developers.
