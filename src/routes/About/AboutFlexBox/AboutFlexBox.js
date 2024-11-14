import React from 'react'
import "./AboutFlexBox.css"
import managerimg from "../../../images/manager.png"
const AboutFlexBox = () => {
  return (
    <div class="flex-container">
      <div class ="container">
        <div class ="flex-item-holder">
            <div class="flex-item">
                <img class ="manager-img1" src={managerimg} alt = "Foto vom Manager" />
                A biography, or simply bio, is a detailed description of a person's life. It involves more than just basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of their life, including intimate details of experience, and may include an analysis of the subject's personality.
            </div>

            <div class="flex-item">
              <img class ="manager-img1" src={managerimg} alt = "Foto vom Manager" />
              <div class="flex-item-text">
              <h4>
                Manager
              </h4>
              <p class = "biotext">
                A biography, or simply bio, is a detailed description of a person's life. It involves more than just basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of their life, including intimate details of experience, and may include an analysis of the subject's personality.
              </p>
              </div>
            </div>

            <div class="flex-item">
            <img class ="manager-img1" src={managerimg} alt = "Foto vom Manager" />
            A biography, or simply bio, is a detailed description of a person's life. It involves more than just basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of their life, including intimate details of experience, and may include an analysis of the subject's personality.

                </div>
            <div class="flex-item">
            <img class ="manager-img1" src={managerimg} alt = "Foto vom Manager" />
            A biography, or simply bio, is a detailed description of a person's life. It involves more than just basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of their life, including intimate details of experience, and may include an analysis of the subject's personality.

                </div>
                </div>
      </div>
    </div>
  )
}

export default AboutFlexBox