import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScroll(scrolled);
    // console.log(`%c ${scrolled}`, 'color: red');
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <div className="progressWrapper">
        <div className="progressBar" style={{ height: `${scroll}%` }}></div>
      </div>
      <h1>Scroll Progress Bar</h1>
      <div className="scroll">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          sapiente maxime est accusantium, impedit nisi unde adipisci temporibus
          sunt ipsa quo eum incidunt asperiores voluptatum repellendus minus
          dicta iste et animi saepe laboriosam dolorem eos laborum. Excepturi
          magni eveniet quia, tenetur nisi blanditiis? Magni sapiente nostrum
          itaque perspiciatis. Doloribus fugit rem obcaecati eum. Laboriosam,
          deserunt id reiciendis porro, ab, ipsam omnis harum est beatae
          adipisci saepe commodi odit mollitia nam. Qui veniam quisquam ipsum,
          delectus suscipit soluta molestias, ut molestiae cumque ratione et
          asperiores esse laborum saepe nobis illo corporis fugiat laudantium
          maxime deserunt ducimus ad. Sunt dolore perspiciatis voluptatibus
          consequatur minus quibusdam ut autem, facere deserunt tempora adipisci
          libero et aliquam velit blanditiis commodi aspernatur omnis doloribus
          ab dolores! Vel, cumque eos tempora sunt cupiditate nesciunt
          praesentium omnis quisquam minima ad aliquam id quidem modi minus at
          quia quae animi voluptas deleniti est molestiae odit? Saepe adipisci
          quidem, exercitationem cum eum dignissimos delectus molestiae
          blanditiis tenetur esse, corporis neque iusto quisquam. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Illo architecto atque
          earum rem unde sequi eum velit amet magni exercitationem delectus
          saepe nulla ea fugit, <br /> iste a. Officia eligendi, labore sit
          architecto suscipit exercitationem cupiditate incidunt veniam tempora
          sint id sequi commodi nihil cum inventore soluta optio unde odio
          voluptatem distinctio autem voluptas maiores cumque nostrum? Rerum
          voluptatibus est laudantium, dolorum facere delectus obcaecati? Quos
          quam porro soluta odio consequuntur facere ex ut impedit modi, in
          dolorem rem animi exercitationem delectus excepturi omnis laboriosam
          alias quis officia totam! Molestias, dignissimos reiciendis a dicta
          distinctio accusantium perspiciatis facilis! Nesciunt quaerat ab minus
          repellendus nam illum aperiam harum voluptate, culpa commodi animi
          adipisci voluptatem sint dolor perferendis ea explicabo maxime? Qui
          fuga et earum ipsum animi amet iusto hic. Voluptatum fuga distinctio,
          veniam maxime magni dolores nulla error minus doloribus ipsum, quos,
          molestiae et quidem similique hic mollitia ad vero eveniet! Hic eius
          delectus accusamus saepe! Explicabo, consequuntur voluptatibus
          sapiente fugiat, velit, qui quidem facilis laboriosam in minus
          reiciendis rem aspernatur quae illum nemo? Enim tempora nulla
          consequuntur consectetur, nam quam animi iste quos dignissimos quis
          voluptatem, accusantium temporibus veniam architecto eveniet soluta
          quaerat, sequi excepturi nemo omnis suscipit alias. Quibusdam illum
          numquam distinctio dolor, eveniet mollitia perferendis quae fugit modi
          minima quo nihil maiores, vero perspiciatis a, temporibus consequuntur
          tempore? Architecto iusto cum modi. Aliquam sunt, accusamus officia
          accusantium omnis ex vero cum dolorem mollitia dicta eveniet possimus
          explicabo quasi quos id facere dolorum aliquid, similique, illo sed?
          Obcaecati in nulla sapiente mollitia quisquam quas dolorem ad vel
          laborum aspernatur vitae, corrupti neque esse minus doloremque at
          omnis impedit repellendus voluptate! Aliquam neque, mollitia
          praesentium et est a magnam asperiores possimus, enim eum quo omnis ex
          tempore. Voluptatem omnis dolor accusantium vel, eius eaque, corporis
          voluptates eum veniam cum impedit totam. Reprehenderit voluptates
          labore quo eveniet totam maxime magnam. Doloremque tenetur commodi
          fugiat officia laboriosam eligendi nobis distinctio quia cum?
          Doloribus pariatur nostrum Lorem ipsum, dolor sit amet consectetur
          adipisicing elit.
          <br /> Assumenda, libero dolor reprehenderit explicabo quis neque
          ducimus, omnis debitis voluptate nesciunt pariatur et rem, autem fuga.
          Est atque eveniet voluptatibus ipsam accusamus quo repellendus modi
          accusantium soluta dolorem sit aspernatur dolore eius ut cumque quas
          quae pariatur, adipisci aliquam quos laborum consequuntur. Doloremque
          sunt voluptate blanditiis porro, nisi deserunt iste neque eligendi, ea
          repudiandae nihil quaerat ratione nulla natus fuga asperiores? Alias
          facilis quisquam a? Alias illo dicta ea fugiat aperiam deleniti
          nesciunt hic eligendi fugit laborum architecto, debitis exercitationem
          voluptate omnis sapiente nulla sint. Excepturi facilis, officiis
          beatae quaerat, cupiditate tempora soluta id amet, delectus quibusdam
          architecto assumenda doloremque ut! Autem dolorem, fugiat error
          expedita recusandae nostrum dolore quod praesentium, delectus maiores,
          quae unde culpa inventore similique mollitia necessitatibus corrupti
          nulla facilis. Autem veritatis tempora debitis nemo cum sit neque quam
          rem maxime veniam laborum aut odio, ullam, unde architecto eum
          pariatur vero mollitia vitae! Quod distinctio officiis tenetur eaque
          optio temporibus architecto. Eum est fugit, ullam sit voluptate
          exercitationem at minima non veritatis natus fugiat vitae modi saepe
          pariatur eaque molestiae aliquid quasi consectetur? Tenetur soluta
          molestiae ipsa, sapiente saepe quod explicabo placeat, consequatur
          aperiam amet optio? Dolorum, sunt necessitatibus cumque quasi saepe
          esse quaerat eaque labore quidem eveniet? Quibusdam porro,
          exercitationem eveniet quod excepturi est. Maiores, sapiente iusto
          aliquid quibusdam molestiae eos voluptatum sequi neque delectus, animi
          veniam aperiam accusamus ullam perspiciatis corporis rerum ducimus
          vitae commodi earum quas optio facilis. Perspiciatis, nisi? Quos
          repudiandae asperiores nesciunt vero, rerum placeat quibusdam iure
          accusamus, iste nisi cum at eaque minima dolore voluptatem?
          Voluptatum, totam itaque id reprehenderit nemo, dignissimos nesciunt
          at repellendus illo, rerum officia quo incidunt nihil cum quae et
          aliquid illum fugiat. Facilis minima ut sapiente voluptatum quibus{" "}
          <br /> dam libero labore obcaecati tempora, eos sequi est atque in
          quidem ratione nihil nemo magnam earum perferendis accusamus natus
          provident modi voluptatibus. Laudantium officiis voluptas aperiam odio
          fuga quam praesentium provident magnam similique quos amet
          exercitationem illum, eligendi quasi iure blanditiis fugit qui animi
          sit itaque. In magnam eum quod voluptas corporis vero, ducimus
          explicabo, reprehenderit aliquid iste obcaecati, porro facere nisi.
          Nam tempore incidunt voluptate nesciunt earum vel quasi eos odio
          saepe, maxime accusamus illo, voluptates eligendi vitae consequuntur
          praesentium voluptatum molestias? Optio, sint at doloribus laborum
          enim exercitationem tenetur, rem voluptates vitae a sunt error
          voluptate molestiae fugiat, possimus atque delectus explicabo harum
          repellendus temporibus dolore? Qui. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perspiciatis excepturi quisquam omnis
          adipisci voluptate! Facere, alias enim ipsam dolor laudantium delectus
          doloremque provident ducimus necessitatibus eveniet! Veritatis iusto
          cum sequi ab ea aliquam culpa id beatae quis earum, voluptas, non
          eveniet! Distinctio ipsum veniam aliquid facere quo provident impedit
          a amet atque id error doloremque recusandae, eius, quas, ut minus
          doloribus eaque fuga beatae incidunt magnam quibusdam maxime?
          Laudantium veritatis magnam perspiciatis quasi, illo molestiae esse
          repellendus quod bl <br />
          anditiis necessitatibus nihil corrupti, accusantium ad omnis pariatur
          rerum reiciendis ea? Est laborum culpa autem at quia quas mollitia
          nihil et commodi. Delectus veniam rem eos tempore sit, quo velit
          aliquid ut vero asperiores possimus perspiciatis. Voluptatum ducimus
          ullam nemo facilis, esse quisquam veritatis libero! Architecto aliquam
          recusandae obcaecati vero aperiam! Amet adipisci ipsum facere ad alias
          eligendi, natus veniam delectus asperiores aliquid, laborum dolorem
          aperiam accusantium, libero deserunt quasi. Recusandae repellendus
          commodi ipsa soluta, nam quis alias, quibusdam dolorem quidem quasi
          nesciunt perferendis officia nobis! Dolor quam, aliquid distinctio,
          nisi nulla quo incidunt eum id voluptas recusandae beatae obcaecati
          repudiandae. Nostrum dolorum quis sapiente eius dolor repellendus
          quibusdam perspiciatis accusamus, odio aliquam similique ex. Eius cum
          expedita ipsa alias ducimus eveniet voluptatibus ullam illum quasi
          possimus laudantium quos quisquam autem, eum nobis recusandae nam
          tenetur! Adipisci consequatur quam, illum nam unde rerum soluta nemo,
          quisquam officiis ratione quibusdam alias vitae enim placeat, ut
          nesciunt! Suscipit distinctio voluptatum, earum inventore debitis quos
          asperiores quod quidem modi consequuntur animi totam numquam
          laboriosam, ab vitae ratione impedit necessitatibus iste
          exercitationem blanditiis. Eos inventore, ea recusandae hic explicabo
          nihil laboriosam fugit velit itaque quam deleniti quasi repudiandae
          enim error ipsum corrupti modi, incidunt in nobis necessitatibus
          pariatur consequuntur beatae ad debitis. Impedit dolor ipsam, vero
          neque earum nisi repudiandae assumenda pariatur optio excepturi
          veniam, maiores sequi corporis. Aperiam reiciendis quo deserunt. In
          aspernatur magnam quas voluptates. Quaerat accusantium ratione harum
          consequuntur qui vel rerum pariatur quo? Incidunt sint possimus,
          aliquid magnam dolor quibusdam facilis nostrum, eum, recusandae
          maiores et. Tempore facilis possimus modi. Excepturi ipsam, ducimus
          perferendis quibusdam tenetur sed inventore, quos corporis quisquam
          eius modi saepe in deserunt sunt, voluptatum dolor molestiae itaque
          numquam quam! Consequuntur aliquam sit natus perspiciatis, adipisci
          consequatur, officia ex esse harum amet ipsa iure dolorum vero totam
          debitis iusto impedit eligendi cum quibusdam atque minus aliquid a
          magni. Sed obcaecati officiis cum mollitia perspiciatis reiciendis
          odit adipisci doloribus ullam. sed iure architecto quidem repudiandae,
          molestias ab quasi nisi beatae cumque sequi ea. Molestiae ea adipisci
          perspiciatis ratione. <br /> Voluptatibus magni assumenda, quaerat
          corporis aspernatur consectetur unde ducimus. In facilis, molestias
          repudiandae cumque ex provident distinctio magni, alias ipsum ratione
          iure id aperiam explicabo consequuntur error hic officia perspiciatis
          eaque repellat deserunt? Ratione exercitationem impedit velit? Itaque
          quae, provident sit expedita non, repellat, quasi illum magnam minus
          suscipit maxime sequi beatae minima libero enim! At, odit, quidem
          ipsam, voluptate eius fugit assumenda veritatis culpa voluptatibus
          repudiandae quis sit iste excepturi sed iusto. Debitis, sint? In sequi
          alias voluptates fugiat similique consequatur recusandae distinctio
          tempora? Earum vitae id a quae iure tempore facere, nisi, fugiat error
          repellat quos!
        </p>
      </div>
    </div>
  );
}
