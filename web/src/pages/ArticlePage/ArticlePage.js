import { MetaTags } from '@redwoodjs/web'

// cells
import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
	return (
		<>
			<MetaTags title="Article" description="Article page" />

			<ArticleCell id={id} />
		</>
	)
}

export default ArticlePage
