import { FC } from 'react'
import Helmet from 'react-helmet'

import { ResultsPanel, SearchBar } from '../../components'

import { Wrapper } from './Wrapper'
import { appName, divider } from '../../assets/js'

interface OwnProps {}

type Props = OwnProps

const Home: FC<Props> = (props) => {
    return (
        <section className='search-table'>
            <Wrapper>
                <Helmet>
                    <title>
                        {appName} {divider} Home
                    </title>
                </Helmet>
                <SearchBar />
                <ResultsPanel />
            </Wrapper>
        </section>
    )
}

export default Home
