const Titres = (props:{children:string}) => {
    return (
        <h3 className="text-3xl font-bold border-b-4 border-b-blue-600 w-4/5 md:w-1/3 ml-7 mt-2 p-4">
           {props.children} 
        </h3>
    );
};

export default Titres;