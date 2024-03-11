import { Box } from "@mui/material";
import "./about.scss";

const About = () => {
    return (
        <Box className="about">
            <Box
                component="section"
                className="about__section">
                <h3>Misión</h3>
                <img
                    src="/images/about/mission.png"
                    alt="Fotrografía de la misión de la empresa"/>
                <p>En Tincho Store, nos dedicamos apasionadamente a proporcionarte una experiencia excepcional al adquirir tu iPhone. Nuestra misión fundamental es ofrecerte una amplia gama de productos Apple, asegurando la calidad y autenticidad en cada compra. Nos esforzamos por convertirnos en tu destino de confianza para satisfacer todas tus necesidades tecnológicas con atención personalizada y un servicio excepcional.</p>
                <p>Desde el momento en que ingresas a nuestra tienda en línea, nos empeñamos en hacerte sentir bienvenido y seguro de que encontrarás exactamente lo que necesitas para tu dispositivo Apple, sin importar tus preferencias o necesidades específicas. Ya sea que estés buscando el último modelo de iPhone o accesorios para complementar tu dispositivo, estamos aquí para ayudarte en cada paso del proceso de compra.</p>
                <p>En Tincho Store, creemos que la tecnología debe ser accesible para todos y estamos comprometidos a brindarte una experiencia de compra sin complicaciones. Nos enorgullecemos de ofrecer un catálogo diverso y actualizado, garantizando que siempre tengas acceso a las últimas innovaciones de Apple. Nuestra misión es superar tus expectativas y convertirte en un cliente satisfecho y leal a largo plazo.</p>            </Box>
            <Box
                component="section"
                className="about__section about__section--vision">
                <h3>Visión</h3>
                <img
                    src="/images/about/vision.png"
                    alt="Fotrografía de la visión de la empresa"/>
                <p>En Tincho Store, aspiramos a ser reconocidos como líderes indiscutibles en la venta de iPhones, superando constantemente las expectativas de nuestros clientes en cada interacción. Nuestra visión va más allá de ser una tienda en línea convencional; nos esforzamos por ser un referente en la industria tecnológica, brindando innovación y calidad en cada producto y servicio que ofrecemos.</p>
                <p>Guiados por valores sólidos como la transparencia, la integridad y el compromiso con la excelencia, buscamos establecer relaciones a largo plazo con nuestros clientes, basadas en la confianza y la satisfacción mutua. Nos comprometemos a mantenernos a la vanguardia de las últimas tendencias tecnológicas y a proporcionarte una experiencia de compra sin igual, respaldada por nuestro equipo dedicado y apasionado.</p>
                <p>En Tincho Store, creemos en un futuro donde la tecnología mejore la vida de las personas y estamos comprometidos a ser parte de ese cambio. Nuestra visión es seguir innovando y adaptándonos a las necesidades cambiantes del mercado, siempre con el objetivo de ofrecerte productos y servicios que mejoren tu vida digital y te mantengan conectado con el mundo que te rodea.</p>
            </Box>
            <Box
                component="section"
                className="about__section">
                <h3>Valores</h3>
                <img
                    src="/images/about/valores.png"
                    alt="Fotrografía de la valores de la empresa"/>
                <p>En Tincho Store, nuestros valores son la piedra angular de nuestra identidad y operaciones diarias. La transparencia es esencial en todas nuestras interacciones con los clientes, ya que creemos en proporcionar información clara y precisa en todo momento. Nos comprometemos a ser honestos y directos en nuestras comunicaciones, construyendo así relaciones basadas en la confianza y la transparencia.</p>
                <p>La integridad es un principio no negociable en nuestro negocio, y nos comprometemos a mantener altos estándares éticos en todas nuestras acciones. En Tincho Store, hacemos lo correcto incluso cuando nadie está mirando, demostrando nuestro compromiso con la honestidad, la justicia y la equidad en todo lo que hacemos.</p>
                <p>Nuestro compromiso con la excelencia impulsa nuestra constante búsqueda de la mejora continua, siempre buscando superar las expectativas y ofrecer un servicio excepcional. Nos esforzamos por ser líderes en nuestra industria, innovando constantemente y elevando el estándar en todo lo que hacemos.</p>
                <p>En Tincho Store, la satisfacción del cliente es nuestra prioridad absoluta, y nos esforzamos por mantenerla en cada aspecto de nuestro trabajo. Valoramos a cada cliente y nos comprometemos a brindar una experiencia de compra personalizada y sin complicaciones. En cada interacción, nos esforzamos por superar tus expectativas y garantizar tu completa satisfacción con nuestros productos y servicios.</p>
            </Box>
        </Box>
    );
};

export default About;