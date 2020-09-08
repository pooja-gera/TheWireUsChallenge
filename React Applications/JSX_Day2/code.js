/** creates a JSX element having div tag*/
const JsxElement = <div>I am a JSX element!</div>;

/**Creates a JSX element having children for a parent tag*/
const JsxWithChild = (
    <div>
        <h1> I am child1 of div tag </h1>
        <h2> I am child2 of div tag </h2>
    </div>
);

/**Creates a JSX div element with class as Hi*/
const JsxWithClass = (
    <div className="Hi">
        I am a div tag with class name as Hi.
    </div>
);

/**Creates a JSX div element using JS elemnt name inside div*/
const name = "Harshita";
const JsElement = <div> I am {name} </div>;

/**Creates a JSX element that displays no of cakes and icecreams*/
function giveNumber(bakery){
    return bakery.cakes + bakery.icecreams;
}
const bakery = {
    cakes : 10,
    icecreams : 20
};
const JsElement = <div>Total number of cakes and icecreams in this bakery : {giveNumber(bakery)}</div> 


