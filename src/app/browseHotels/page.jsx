import Image from "next/image";
import PageHeader from "../components/PageHeader/pageheader";

const browseHotels = () => {
  return (
    <>
      <main className="bg-gray-100 pb-16">
        <PageHeader pageTitle={"Browse Hotels"} />

        <section className="top-[10%] grid grid-cols-2 w-[90%] mt-16 mx-auto py-12 px-[60px] bg-white"
        >
          <div className="relative w-[40vw] h-[450px]">
          <Image 
          src="/assets/pictures/e-wallet.png" // replace with your image path
          alt="Description of image"
          width={450}
          height={530}
          className="object-cover" // To control how the image is resized
        />
          </div>
          <div className="relative w-64 h-64">
            <div className="absolute left-[-200px] top-[10%] w-[600px] py-10 px-12 bg-gray-200 text-[12px] ">
              <div className="mb-2">
                <h1 className="font-bold text-lg">ABOUT HURST</h1>
                <div className="border-b-2 border-gray-300 w-[45px]"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut
                enim ad minim veniam, ommodo consequa. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia is be deserunt
                mollit anim id est laborum.
              </p>
              <p className="my-4">
                Sed ut perspiciatis unde omnis iste natus error sit. voluptatem
                accusantium doloremque laudantium, totam remes aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default browseHotels;
