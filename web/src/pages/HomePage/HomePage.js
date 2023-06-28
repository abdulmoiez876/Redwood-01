import { MetaTags } from '@redwoodjs/web'

// components
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
	return (
		<>
			<MetaTags title="Home" description="Home page" />

			<>
				<ArticlesCell />
			</>
		</>
	)
}

export default HomePage
