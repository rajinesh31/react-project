// const Props = () => {
//     return (
//         <User 
//         name="raio" 
//         age={21} 
//         married={false} 
//         hobbies={["reading" , "writing"]}
//         />
//     );
// };
const Props = (props) => {
    return ( 
        <section>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </section>
    );
};
export default Props;