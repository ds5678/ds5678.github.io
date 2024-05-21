async function getJson(url) {
	const response = await fetch(url);
	return await response.json();
}

app.component('articles-page', {
	template:
	/*html*/
	`<div class="">
		<h1 class="text-center my-2">{{title}}</h1>
		<hr/>
		<div class="container-fluid">
			<div v-if="currentArticle === null" class="row p-2">
				<div class="col-3">
					<h3>Filter Options</h3>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="en-checkbox" v-model="includeEnglishArticles"/>
						<label class="form-check-label" for="en-checkbox">English</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="checkbox" id="de-checkbox" v-model="includeGermanArticles"/>
						<label class="form-check-label" for="de-checkbox">Deutsch</label>
					</div>
				</div>
				<div class="col-6">
					<div v-for="article in articles" :key="article.RelativePath">
						<div v-if="passesFilter(article)">
							<h2><a @click="currentArticle = article" style="cursor: pointer;">{{article.Title}}</a></h2>
							<p>{{article.Description}}</p>
							<br/>
						</div>
					</div>
				</div>
			</div>
			<div v-else class="row p-2">
				<div class="col-3"></div>
				<div class="col-6">
					<markdown-component :relative_path="currentArticle.RelativePath"></markdown-component>
					<div class="text-center">
					<a class="btn btn-secondary text-center" @click="currentArticle = null">{{backText}}</a>
					</div>
				</div>
			</div>
		</div>
	</div>`,
	data() {
		return {
			articles: [],
			currentArticle: null,
			includeEnglishArticles: true,
			includeGermanArticles: true
		}
	},
	computed: {
		title() {
			if (this.currentArticle === null) {
				return "Articles";
			} else {
				return this.currentArticle.Title;
			}
		},
		language() {
			if (this.currentArticle !== null) {
				return this.currentArticle.Language;
			} else {
				return "en";
			}
		},
		backText() {
			if (this.language === "de") {
				return "Zurück";
			} else {
				return "Back";
			}
		}
	},
	methods: {
		passesFilter(article) {
			if (article.Language === "en") {
				if (!this.includeEnglishArticles) {
					return false;
				}
			}
			else if (article.Language === "de") {
				if (!this.includeGermanArticles) {
					return false;
				}
			}
			return true;
		}
	},
	async created() {
		this.articles = await getJson("/articles/list.json");
	}
});