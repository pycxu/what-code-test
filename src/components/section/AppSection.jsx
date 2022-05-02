import './appSection.scss';

const AppSection = (props) => {

    return (
        <section className="to-do-list">
            <h3 className="text__heading3">To Do List</h3>
            {props.children}
        </section>
    ) 
}

export default AppSection;