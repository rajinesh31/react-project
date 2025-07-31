// const ValidPassword = () => <h1>Valid Password</h1>
// const InvalidPassword = () => <h1>Invalid Password</h1>

// const Password = ({abcd}) => {
//     if (abcd){
//         return <ValidPassword/>;
//     }
//     return <InvalidPassword/>;
// };

// const Ifcondition = () => {
//     return <section>
//         <Password abcd={false}></Password>
//     </section>;
// };
// export default Ifcondition;
// -------
const Ifcondition = () => {
    const items = ["Oneplus","samsange","Realme"];
    return(
        <div>
            <h1>cart</h1>
            {items.length > 0 && <h5>You have {items.length} items in your Cart</h5>}
        </div>
    );
};
export default Ifcondition;
