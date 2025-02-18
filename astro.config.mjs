// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Libreria de Satoshi | Documentación',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Cursos',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'cursos/example' },
						{ label: 'Bootcamp Bitcoin', slug: 'cursos/btc-bootcamp' },							
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
