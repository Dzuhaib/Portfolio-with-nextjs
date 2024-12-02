// pages/testimonials.js
import styles from "./styles.module.css"

const testimonialsData = [
    {
      name: "Nancy Singh",
      image: "https://via.placeholder.com/150",
      comment:
        "Venture Web Designer exceeded my expectations! The team was attentive, creative, and delivered an amazing website that enhanced my business.",
    },
    {
      name: "Oscar",
      image: "https://via.placeholder.com/150",
      comment:
        "They did a fantastic job! The team provided exactly what I needed with professionalism and creativity. Highly recommended!",
    },
    {
      name: "James",
      image: "https://via.placeholder.com/150",
      comment:
        "An absolute pleasure to work with. They turned my ideas into reality with attention to detail and passion. I’ll definitely work with them again!",
    },
  ];
  
  const Testimonials = () => {
    return (
        <>

        <div>
        <div className={styles.area}>

            <div className='py-10 text-3xl text-white text-center'>About Me</div>

            <ul className={styles.circles}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
        </div>
        </div>
        
      <div className="bg-gray-100 py-10 px-5">
        <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-md p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {testimonial.name}
              </h3>
              <p className="text-center text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };
  
  export default Testimonials;
  