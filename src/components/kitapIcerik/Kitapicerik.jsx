import React, {useState} from 'react'
import './kitapicerik.css'
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillStar } from 'react-icons/ai'

const Kitapicerik = () => {
  const [page, setPage] = useState("Sayfa 1")

  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  return (
    <div className='kitapicerik'>
      <div className="kitiust">
        <h2>Babalar ve Oğullar</h2>
        <div className="kiticount">
          <div className="kitistatik">
            <span className="ki-read-count">
              <AiFillEye className='kitiicon'/>443K
            </span>
            <span className="ki-vote-count">
              <AiFillStar className='kitiicon'/>541
            </span>
          </div>
          <p>by <b><Link to='/profil' target='_top' className='kitby'>rukiyeaydin</Link></b></p>
          <div className="yildizla">
            <AiFillStar className='yildizlaicon'/>
          </div>
          <form className='yhform'>
          <select value={page} onChange={handlePageChange}>
            <option value="Sayfa 1">Sayfa 1</option>
            <option value="Sayfa 2">Sayfa 2</option>
            <option value="Sayfa 3">Sayfa 3</option>
            <option value="Sayfa 4">Sayfa 4</option>
            <option value="Sayfa 5">Sayfa 5</option>
          </select>
        </form>
        </div>
      </div>
      <div className="kitalt">
        <h3 style={{textAlign:"center", marginBlock:"30px"}}>{page}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sapiente quaerat consequatur adipisci repudiandae quae ab amet unde. Ex quaerat laboriosam repudiandae? Quaerat in sunt laborum eius magnam aut voluptates architecto rerum impedit non nemo iste, officia distinctio fuga. Aperiam totam iusto quas omnis suscipit cum facilis ut, ratione officiis veritatis maiores blanditiis consequatur, beatae deserunt odit iure. Molestiae sapiente delectus vitae incidunt possimus aperiam quam quae minima ratione dolor similique ea dolorem optio ut minus harum, voluptas expedita provident ab quisquam autem? Non laudantium sapiente nostrum officiis architecto ullam vero! Aliquid architecto optio delectus modi repudiandae repellendus facere temporibus laboriosam voluptas dolorum! Vero sed illo recusandae modi nihil reprehenderit nulla, assumenda deleniti at, accusamus nemo corrupti nostrum inventore explicabo quod quisquam voluptate mollitia harum voluptates, rerum eos quis repellat beatae tempore. Cupiditate eligendi, soluta provident consectetur molestias ea assumenda? Impedit voluptatibus necessitatibus itaque quaerat corrupti harum mollitia excepturi quidem asperiores? Commodi, eveniet! Odio suscipit esse earum officiis, nihil dicta aliquam aliquid vitae vero ducimus reprehenderit repellendus nostrum, repellat ipsam atque, voluptatum accusamus porro culpa sit architecto iure placeat voluptatibus ipsum. Aspernatur ab soluta quas harum voluptates dolore delectus animi culpa pariatur laudantium numquam esse velit laborum suscipit optio quo perspiciatis, placeat incidunt, blanditiis officiis accusamus quam. Error ab magnam nesciunt. Cumque accusamus quisquam consectetur nemo odio eum aspernatur amet! Nesciunt dicta quo, aut beatae pariatur provident temporibus ad earum? Dolores consequuntur mollitia beatae natus delectus! Soluta quasi molestiae incidunt aliquam fugit consectetur temporibus quibusdam, aspernatur totam quos repudiandae praesentium mollitia voluptates ipsa aperiam pariatur, iure quia minus inventore earum dolorum corporis delectus voluptas velit! Error, quod odio pariatur amet qui reiciendis accusantium rem asperiores ipsa velit deleniti modi. Sapiente sequi quis reiciendis cumque totam suscipit reprehenderit illum minima asperiores, culpa, tempore aperiam atque molestias ratione odit eaque incidunt dolorem exercitationem magni alias debitis aliquid. Dolore ea exercitationem ab ipsam consequuntur odit doloremque laudantium consectetur quidem. Cumque autem quam aut eius incidunt? Nostrum ipsa saepe exercitationem deserunt, magnam eius corporis quos nihil error quam doloremque cupiditate fugiat ea alias atque omnis officia quae voluptate magni voluptatibus hic! Quidem officia veniam praesentium doloribus quo provident maxime id iure voluptatem quasi vero explicabo nisi perferendis sequi, necessitatibus, delectus amet! Repellat similique vitae quae optio. Architecto, sed recusandae nihil deleniti delectus pariatur obcaecati, fugit vitae sequi illum ad nisi a, ipsam ea eligendi suscipit sit dignissimos doloremque molestiae distinctio atque cum fugiat reprehenderit ex! Beatae qui, iste ad sint ipsum fuga necessitatibus? Id quis culpa amet quod neque recusandae, rem voluptates et nisi dicta libero est illum voluptatem itaque iste aperiam eveniet maiores facere perspiciatis explicabo eos tenetur inventore? Assumenda dignissimos alias exercitationem sequi magnam soluta eum ea perspiciatis nam. Dignissimos nesciunt nisi harum vitae, est saepe corrupti. Temporibus voluptatum minima itaque placeat doloremque! Aliquid temporibus velit nostrum perferendis, magni harum quis molestiae cupiditate fugit quisquam error minima doloribus numquam libero, maxime ea laboriosam reiciendis. Accusantium corporis quidem quis eligendi aspernatur repellat expedita aperiam, deleniti voluptatum fuga cumque? Sapiente aliquid laborum tempora sequi perspiciatis perferendis voluptatem cupiditate quia itaque incidunt aliquam placeat ipsum nemo ea deleniti possimus quod velit animi, tempore nihil voluptatum illo sunt? Incidunt explicabo rerum molestias quod modi, possimus sunt omnis dolorum et perspiciatis magnam quo, asperiores dolore excepturi iure perferendis quam numquam. Quos et eum similique voluptatibus. Nam in odio vel deleniti dignissimos mollitia maxime optio nulla voluptas et sunt accusantium enim beatae a dicta non error nihil, officiis, voluptatem nisi laborum consequuntur asperiores temporibus? Eaque eos placeat voluptas, accusamus cum commodi atque ad vel iure delectus modi, obcaecati autem et veniam unde non architecto harum, illo culpa reiciendis laudantium voluptatum necessitatibus. Tempore nesciunt itaque ut veritatis sunt tempora quod ad dignissimos explicabo earum cupiditate modi exercitationem, at illo dolorum, nemo cum ipsa animi officia ullam repellendus est placeat. Delectus aliquid dolore vitae porro adipisci consequatur provident optio corrupti. Suscipit cupiditate a exercitationem maxime reprehenderit natus earum, alias, temporibus voluptatibus, aspernatur culpa? Aliquam enim mollitia repellat optio, consequatur perspiciatis dolorum nisi ad sed veniam, sit quidem laborum ratione itaque accusantium! Placeat debitis incidunt voluptatibus voluptate. Dolore adipisci laudantium pariatur, eveniet dolorum suscipit impedit commodi obcaecati eum odio, tenetur debitis laboriosam quam maiores nesciunt iure perspiciatis voluptatum dicta. Repellat necessitatibus eligendi, libero, modi placeat magni error ipsa aspernatur, fugit dolorum quo delectus eum. Impedit aspernatur tenetur fuga unde possimus totam excepturi placeat, facilis perferendis rerum, soluta inventore, sit et itaque pariatur assumenda dicta alias nulla. Illo nobis sequi error excepturi rerum eveniet porro temporibus corrupti quas laborum placeat eum facilis ex, libero, atque nisi! At consectetur quas ipsam maiores. Magni qui error consequatur voluptates culpa illo sed magnam, aut debitis. Soluta ipsum nihil facere quisquam quo reiciendis harum voluptates, qui provident quae autem iusto pariatur exercitationem quia. Ipsa, officia, quasi itaque veritatis nostrum inventore saepe ducimus aspernatur iusto sint harum fugit sed voluptas obcaecati quae id ex voluptates? Est eveniet nobis, asperiores minima repudiandae earum, perspiciatis perferendis modi quam dicta labore adipisci. Mollitia veniam aut, sequi cum a vero placeat, ea architecto inventore dolores vitae ullam ipsa, necessitatibus cupiditate commodi voluptatem non suscipit facilis quod porro perspiciatis. Culpa dolor, est velit, deleniti omnis eum dolorem minima reiciendis obcaecati optio vel, a ab tempora iure nihil eaque cum placeat possimus inventore aliquid commodi sint perferendis voluptatum aliquam? Esse consequuntur error mollitia inventore ipsa praesentium sequi quos? Illum nostrum minus cum enim quaerat voluptates, facilis aut voluptatum, esse consequatur doloribus porro sequi animi maxime nobis distinctio numquam eius optio maiores, voluptatibus ipsam. Facilis nemo quas in doloribus atque ipsum nobis maiores similique excepturi illum consequuntur explicabo eos cupiditate iusto sit nostrum quidem, quae ex doloremque expedita? Optio debitis temporibus consectetur, molestiae accusantium illo architecto, non quis ratione id iusto quibusdam minima laborum ipsa obcaecati libero, suscipit sapiente? Tempora, necessitatibus perspiciatis! Iure consequatur hic adipisci aliquam veniam commodi odit doloremque officia nemo neque perspiciatis, eos quasi, minus optio. Ad exercitationem hic blanditiis, vero dolor non dolorum tempora quae, assumenda vitae ipsam mollitia, placeat a? Voluptas perspiciatis facilis, quis rerum reiciendis facere nemo dolore?</p>
      </div>
      <div className="kitapicerikbutons">
        <button className='kitapicerikbutons1'>Düzenle</button>
        <button className='kitapicerikbutons2'>Sayfayı Sil</button>
      </div>
    </div>
  )
}

export default Kitapicerik
