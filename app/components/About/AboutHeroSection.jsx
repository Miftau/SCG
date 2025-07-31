
import { NavigationMenuDemo } from "../Header/MainNavbar";

const AboutHeroSection = () => {
    return (
        <div className="relative w-full min-h-1/2 bg-[#092346]">
            {/* Background image */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/groupHero-Bt0B6L23.svg')" }}
                ></div>
            </div>

            {/* Content over background */}
            <NavigationMenuDemo />
            <div className="relative z-10 text-white flex flex-col pt-12 items-center  h-[70vh] md:min-h-[400px]">
                <div className="w-full max-w-4xl flex flex-col items-center justify-center px-4 text-center">
                    <p className=" text-2xl md:text-4xl font-bold ">
                        عن النمور

                    </p>
                    <p className="text-sm f pt-4 sm:pt-6 md:pt-8">
                        النمور هو المزود الرائد لخدمات السحابة في المملكة العربية السعودية، ويعمل على دعم وحماية البنية التحتية التقنية للمؤسسات من جميع الأحجام.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutHeroSection;
