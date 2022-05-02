import './appHeader.scss';

const AppHeader = () => {

    return (
        <header className="app__header">
            <h3 className="text__heading3">Congrats!</h3>
            <p className="text__normal">
            If you're able to start this app, you just passed the first test on
            version control
            </p>
            <p className="text__normal">
            Right now, we just need you to finish this simple todo list feature.
            😊
            </p>
        </header>
    )
}

export default AppHeader;