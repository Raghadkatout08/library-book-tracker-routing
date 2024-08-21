export const metadata = {
  title: "About us",
  description : "welcome to about us page"
}
function AboutUs() {
    return (
      <div className="flex flex-col min-h-screen relative">
        <main className="flex-grow p-4 pt-16 relative  bg-gray-300 dark:bg-[#353839]">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-yellow-400">About Us</h1>
          <p className="text-lg mb-4 text-gray-850 dark:text-white">
            Welcome to the Library Book Tracker! We are a dedicated team of book enthusiasts committed to helping you manage and track your book collection with ease.
          </p>
          <p className="text-lg mb-4 text-gray-850 dark:text-white">
            Our mission is to provide a user-friendly platform where you can effortlessly add, track, and organize your books. Whether you're an avid reader or just starting to build your library, our tool is designed to simplify the process and enhance your reading experience.
          </p>
          <p className="text-lg mb-4 text-gray-850 dark:text-white">
            Our team is passionate about books and technology, and we continuously strive to improve our service based on user feedback. If you have any questions or suggestions, feel free to reach out to us through our contact page.
          </p>
          <p className="text-lg text-gray-850 dark:text-white">
            Thank you for choosing Library Book Tracker. Happy reading!
          </p>
        </main>
      </div>
    );
  }
  
  export default AboutUs;