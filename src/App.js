import './App.css';

{/* const btn= document.getElementById('menu-btn');
    const nav= document.getElementById('menu');
        
    btn.addEventListener('click', () =>{
      btn.classList.toggle('open')
      nav.classList.toggle('flex')
      nav.classList.toggle('hidden')
  })  
*/}
function App() {
  return (


    
  <div className="container mx-auto p-0 m-0 box-border font-sans">

      {/*NAVBAR CONTAINER*/}
      <nav className="relative container bg-blue-400 mx-auto p-6 rounded-md" >

      {/*NAVBAR*/}  
      <div className=" flex items-center justify-between">

        <div className=" pt-2 text-white font-extrabold text-xl hover:scale-95">
          <img src="" alt="Logo" className=" items-center"/>
        </div>

        <div className=" hidden md:flex font-semibold text-white flex space-x-6 items-center">
          <a href="#" className="hover:text-blue-900">Pricing</a>
          <a href="#" className="hover:text-blue-900">Product</a>
          <a href="#" className="hover:text-blue-900">Services</a>
          <a href="#" className="hover:text-blue-900">Careers</a>
          <a href="#" className=" hover:bg-black bg-blue-900 py-2 px-4 rounded-md shadow-md shadow-blue-900">About Us</a>
        </div>

        {/*HAMBURGER ICON*/}

      
          <button  id="menu-btn"  className="md:hidden block focus:outline-none">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        

      </div>

      {/*MOBILE MENU*/}
      <div className="md:hidden">
        <div id="menu" className=" absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-blue-400 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-white rounded-md">
          <a href="#" className="hover:text-blue-900">Pricing</a>
          <a href="#" className="hover:text-blue-900">Product</a>
          <a href="#" className="hover:text-blue-900">Services</a>
          <a href="#" className="hover:text-blue-900">Careers</a>
        </div>
      </div>
    </nav>

    {/*HEADER/ HERO SECTION*/}

    <section id="hero">

       {/*INTRO HERO LEFT*/} 
      <div  className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-blue-900">Instantly access files, apps, documents and many more with only one click.</h1>
            <p className="max-w-sm text-center md:text-left text-black">Troi makes it simple for everyone to participate in the project ownership, focusing on custom validation and data load points.</p>

            <div className="flex justify-center md:justify-start">
              <a href="#" className="hover:bg-black bg-blue-900 py-2 px-4 rounded-md text-white font-semibold shadow-xl shadow-blue-900">Get Started</a>
            </div>
        </div>

        {/*INTRO IMAGE RIGHT*/}
        <div className="md:w-1/2 px-24 items-center">     
            <img src={require('./assets/images/hero.png')} alt="hero" className=" object-contain h-96 "/>
        </div>
      </div>

    </section>

    {/*FEATURES CONTAINER*/}
    <section id="features">
        <div className=" container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">

            {/*FEATURE HERO LEFT*/}
            <div className="flex flex-col space-y-12 md:w-1/2">
              <h2 className=" max-w-md text-4xl font-bold text-center md:text-left text-blue-900">
                What's different about Troi?
              </h2>
              <p className="max-w-sm text-center md:text-left">Introducing the Virtual Organizer, the ultimate tool for staying organized and on top of your tasks. With it's intuitive interface and customizable features, this digital planner makes it easy to create to-do lists, set reminders and track your progress.</p>
              <div className="md:w-full -ml-14 items-center justify-center hidden md:flex">     
                  <img src={require('./assets/images/hero.png')} alt="hero" className=" object-contain"/>
              </div>
            </div>

            {/*FEATURE HERO RIGHT*/}
            <div className=" flex flex-col space-y-8 md:w-1/2">

                {/*1*/}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  <div className="rounded-full bg-blue-400 md:bg-transparent">
                    <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 rounded-full bg-blue-900 text-white md:py-1 font-bold shadow-md shadow-blue-900">
                          01
                        </div>

                        <h3 className="text-base font-bold md:mb-4 md:hidden text-blue-900">
                          The perfect tool for you.
                        </h3>
                    </div>
                  </div>

                  <div>
                      <h3 className=" hidden mb-4 text-lg font-bold md:block text-blue-900">
                        The perfect tool for you.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis doloremque fuga rem tenetur, vitae id officia molestiae. Minima facere exercitationem in quis possimus natus recusandae facilis rem doloribus dolores!
                      </p>
                  </div>

                </div>

                {/*2*/}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  <div className="rounded-full bg-blue-400 md:bg-transparent">
                    <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 rounded-full bg-blue-900 text-white md:py-1 font-bold shadow-md shadow-blue-900">
                          02
                        </div>

                        <h3 className="text-base font-bold md:mb-4 md:hidden text-blue-900">
                          The perfect manager for you.
                        </h3>
                    </div>
                  </div>

                  <div>
                      <h3 className=" hidden mb-4 text-lg font-bold md:block text-blue-900">
                        The perfect manager for you.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis doloremque fuga rem tenetur, vitae id officia molestiae. Minima facere exercitationem in quis possimus natus recusandae facilis rem doloribus dolores!
                      </p>
                  </div>

                </div>

                {/*3*/}
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  <div className="rounded-full bg-blue-400 md:bg-transparent">
                    <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 rounded-full bg-blue-900 text-white md:py-1 font-bold shadow-md shadow-blue-900">
                          03
                        </div>

                        <h3 className="text-base font-bold md:mb-4 md:hidden text-blue-900">
                          The perfect match for you.
                        </h3>
                    </div>
                  </div>

                  <div>
                      <h3 className=" hidden mb-4 text-lg font-bold md:block text-blue-900">
                        The perfect match for you.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis doloremque fuga rem tenetur, vitae id officia molestiae. Minima facere exercitationem in quis possimus natus recusandae facilis rem doloribus dolores!
                      </p>
                  </div>

                </div>

                 {/*4*/} 
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                  <div className="rounded-full bg-blue-400 md:bg-transparent">
                    <div className="flex items-center space-x-2">
                        <div className="px-4 py-2 rounded-full bg-blue-900 text-white md:py-1 font-bold shadow-md shadow-blue-900">
                          04
                        </div>

                        <h3 className="text-base font-bold md:mb-4 md:hidden text-blue-900">
                          The perfect companion for you.
                        </h3>
                    </div>
                  </div>

                  <div>
                      <h3 className=" hidden mb-4 text-lg font-bold md:block text-blue-900">
                        The perfect companion for you.
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis doloremque fuga rem tenetur, vitae id officia molestiae. Minima facere exercitationem in quis possimus natus recusandae facilis rem doloribus dolores!
                      </p>
                  </div>

                  </div>

            </div>
         
        </div> 
    </section>

    {/*TESTIMONIAL CONTAINER*/}

    <section id="testimonials">

        <div className=" max-w-6xl px-5 mx-auto mt-32 text-center">

            {/*TESTIMONIAL HEADER*/}
            <h2 className="text-4xl font-bold text-center text-blue-900">
              What's different about Troi?
            </h2>

            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">

                {/*TESTIMONIAL CARDS*/}

                {/*1*/}
                <div className=" md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-blue-400 md:w-1/3 shadow-2xl shadow-blue-900">
                    <img src={require('./assets/images/avatar.png')} className="w-16 -mt-14 border-2 border-blue-900 p-2 rounded-full bg-blue-900 shadow-xl shadow-blue-900" alt="avatar"/>
                    <h5 className="text-lg font-bold text-white">
                        Trunan Kibu
                    </h5>
                    <p className=" text-sm">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis doloremque fuga rem tenetur, vitae id officia molestiae. Minima facere exercitationem in quis possimus natus recusandae facilis rem doloribus dolores."
                    </p>
                </div>

                {/*2*/}
                <div className="md:flex hidden flex-col items-center p-6 space-y-6 rounded-lg bg-blue-400 md:w-1/3 shadow-2xl shadow-blue-900">
                    <img src={require('./assets/images/avatar.png')} className="w-16 -mt-14 border-2 border-blue-900 p-2 rounded-full bg-blue-900 shadow-xl shadow-blue-900" alt="avatar"/>
                    <h5 className="text-lg font-bold text-white">
                        Iro Kibutsuji
                    </h5>
                    <p className=" text-sm">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis doloremque fuga rem tenetur, vitae id officia molestiae. Minima facere exercitationem in quis possimus natus recusandae facilis rem doloribus dolores."
                    </p>
                </div>

                {/*3*/}
                <div className="md:flex hidden flex-col items-center p-6 space-y-6 rounded-lg bg-blue-400 md:w-1/3 shadow-2xl shadow-blue-900">
                    <img src={require('./assets/images/avatar.png')} className="w-16 -mt-14 border-2 border-blue-900 p-2 rounded-full bg-blue-900 shadow-xl shadow-blue-900" alt="avatar"/>
                    <h5 className="text-lg font-bold text-white">
                        Nicollo Machiavelli
                    </h5>
                    <p className=" text-sm">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam debitis doloremque fuga rem tenetur, vitae id officia molestiae. Minima facere exercitationem in quis possimus natus recusandae facilis rem doloribus dolores."
                    </p>
                </div>

            </div>

            {/*BUTTON*/}
            <div className=" my-16">
                <a href="#" className="hover:bg-black bg-blue-900 py-2 px-4 rounded-md text-white font-semibold shadow-md shadow-blue-900">Get Started</a>
            </div>

        </div>

    </section>

    {/*FOOTER TOP CONTAINER*/}

    <section id="CTA" className="bg-blue-400 rounded-md">

      {/*FOOTER TOP*/}

        <div className="flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
             <h2 className=" text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
                  Simplify how everything works.
             </h2>
             <div>
                <a href="#" className="hover:bg-blue-900 hover:text-white shadow-2xl bg-white p-2 rounded-md text-blue-900 font-semibold shadow-xl shadow-blue-900">Get Started</a>
             </div>
        </div>

    </section>

    {/*FOOTER BOTTOM CONTAINER*/}

    <footer className="bg-blue-900 rounded-md">

        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0 ">

          {/*FOOTER BOTTOM*/}
            <div className="flex flex-col-reverse justify-between items-center space-y-12 md:flex-col md:space-y-0 md:items-start">

                <div className="mx-auto my-6 text-center text-white md:hidden">
                  Copyright &copy; 2022, All rights reserved
                </div>
                
                {/*LOGO*/}
                <div>
                    <img src="" alt="Logo" className=" text-white font-extrabold text-xl hover:scale-95 mt-6"/>
                </div>

                  {/*SOCIALS*/}
                <div className="flex justify-center space-x-2">

                    <a href="#">
                      <img src={require('./assets/images/facebook.png')} alt="facebook" className=" h-7 border-2 rounded-full border-blue-400 hover:border-white"/>
                    </a>
                    <a href="#">
                      <img src={require('./assets/images/instagram.png')} alt="instagram" className=" h-7 border-2 rounded-full border-blue-400 hover:border-white"/>
                    </a>
                    <a href="#">
                      <img src={require('./assets/images/linkedin.png')} alt="linkedin" className=" h-7 border-2 rounded-full border-blue-400 hover:border-white"/>
                    </a>
                    <a href="#" >
                      <img src={require('./assets/images/whatsapp.png')} alt="whatsapp" className=" h-7 border-2 rounded-full border-blue-400 hover:border-white"/>
                    </a>
                    <a href="#">
                      <img src={require('./assets/images/twitter.png')} alt="twitter" className=" h-7 border-2 rounded-full border-blue-400 hover:border-white"/>
                    </a>
                </div>

            </div>
          {/*LIST CONTAINER */}
            <div className="flex justify-around  space-x-32-x md:px-2">
              
              {/*LEFT*/}
                <div className="flex-col flex item-center space-y-3 text-white">
                  <a className="hover:text-blue-400 md:mr-28" href="#">Home</a>
                  <a className="hover:text-blue-400" href="#">Pricing</a>
                  <a className="hover:text-blue-400" href="#">Product</a>
                  <a className="hover:text-blue-400" href="#">FAQ</a>
                </div>

                {/*RIGHT*/}
                <div className="flex-col flex space-y-3 text-white">
                  <a className="hover:text-blue-400" href="#">Community</a>
                  <a className="hover:text-blue-400" href="#">API</a>
                  <a className="hover:text-blue-400" href="#">Privacy Policy</a>
                </div>

            </div>

            {/*INPUT CONTAINER */}
            <div className="flex flex-col justify-between">
              {/*INPUT*/}
                <form>
                  <div className="flex space-x-3">
                    <input type="email" className=" rounded-md focus:outline-none flex-1 px-4" placeholder='Submit Email for Updates' />
                    <button className="hover:bg-white shadow-2xl bg-blue-400 p-2 rounded-md hover:text-blue-900 text-white font-semibold shadow-md shadow-black">Go</button>
                  </div>
                </form>

                {/*COPYRIGHT*/}
                <div className="hidden text-white md:block">
                    Copyright &copy; 2022, All rights reserved
                </div>

            </div>

        </div>


    </footer>
    

  </div>  
  );
}

export default App;
