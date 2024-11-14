
import Image from 'next/image';

export default function HomePage() {
    return (
      <div className="home-container">
      
      <div className="left">
        <h1>welome to my first website</h1>
        <p>"This project is built using pure HTML and CSS, showcasing my foundational skills in web design."</p>
      </div>
      <div className="right">
        <img src="image.jpeg" alt="Description" />
      </div>
    </div>
    

  );
}

  
