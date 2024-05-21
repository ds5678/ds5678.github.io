async function getText(url) {
	const response = await fetch(url);
	return await response.text();
}

function convertMarkdownToHtml(text) {
	const customRenderer = new marked.Renderer();

	customRenderer.heading = function (text, level) {
		// Map # to h2 instead of h1
		const headerLevel = level + 1; // Increment level by 1
		return `<h${headerLevel}>${text}</h${headerLevel}>`;
	};

	return marked.marked(text, { renderer: customRenderer });
}

app.component('markdown-component', {
	props: {
		relative_path: {
			type: String,
			required: true
		}
	},
	template:
	/*html*/
	`<div v-html="markdownContent"></div>`,
	data() {
		return {
			markdownContent: '',
		};
	},
	methods: {
		async update() {
			if (this.relative_path === '') {
				this.markdownContent = '';
				return;
			}
				try {
					const text = await getText('/articles/' + this.relative_path);
					if (text === '' || text === null) {
						this.markdownContent = '';
					} else {
						this.markdownContent = convertMarkdownToHtml(text);
					}
				} catch (error) {
					console.error(error.message);
					this.markdownContent = '';
				}
		}
	},
	async created() {
		await this.update();
	}
});