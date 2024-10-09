import { useSelector } from "react-redux";
const About = () => {
  const { count } = useSelector((state)=>state.counter);
  
    return (
      <section>
        <h1 className="mt-24">About page</h1>
        <p>Count in about page:{count}</p>
      </section>
    );
  };
  
  export default About;
