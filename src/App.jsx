import React from 'react'
import Badge from './components/Badge/Badge'
import Banner from './components/Banner/Banner'

function App() {
    return (
        <div className='container'>
            <div className='badges-container'>
                <h1>Badges</h1>
                <div>
                    <div className="square">
                        <h2>Square</h2>
                        <div className="items">
                            <Badge color="gray">
                                Badge
                            </Badge>
                            <Badge color="pink">
                                Badge
                            </Badge>
                            <Badge color="indigo">
                                Badge
                            </Badge>
                            <Badge color="yellow">
                                Badge
                            </Badge>
                        </div>
                    </div>
                    <div className="round">
                        <h2>Round</h2>
                        <div className="items">
                            <Badge color="red" isRound={true}>
                                Badge
                            </Badge>
                            <Badge color="purple" isRound={true}>
                                Badge
                            </Badge>
                            <Badge color="blue" isRound={true}>
                                Badge
                            </Badge>
                            <Badge color="green" isRound={true}>
                                Badge
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banners-container">
                <h1>Banners</h1>
                <Banner title="Congratulations" status="success">
                    You have completed this task. Good job!
                </Banner>
                <Banner title="Attention" status="warning">
                    Warning! Something is wrong.
                </Banner>
                <Banner title="There is a problem with you application" status="error">
                    There is a giant problem with your application. You forgot to send the application fee. Your application has been thrown in the bin.
                </Banner>
                <Banner title="Neutral title" status="Neutral">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officia pariatur deleniti temporibus praesentium maiores nihil aliquid, quidem expedita natus! Ducimus iste dolorum commodi vel sunt facere corrupti qui laborum.
                </Banner>
                <Banner title="Congratulations" status="success" />
            </div>
        </div>
    )
}

export default App