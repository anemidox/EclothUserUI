const emaildata = () => {
    return (`
        <link rel="stylesheet" href="src/pages/footer/contactus/emaildata.css">
        
        <div class="row">

            <div class="column">
            
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.496535073343!2d80.02136437448223!3d6.830910919515704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2521178f99a1d%3A0x9e05e76c4d2972a5!2sPitipana%20-%20Thalagala%20Rd!5e0!3m2!1sen!2slk!4v1722960176883!5m2!1sen!2slk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

            <div class="column">
                <div id="comment-form">

                    <form>
                        <h3> Contact With Us </h3>

                        <p> If you have any questions please fell free to contact with us.</p>

                        <label for="name"></label>
                        <input type="text" id="name" name="name" placeholder="Name" required>

                        <label for="email"></label>
                        <input type="email" id="email" name="email" placeholder="Email" required>

                        <label for="website"></label>
                        <input type="text" id="subject" name="subject" placeholder="Subject" required>

                        <label for="comment"></label>
                        <textarea id="comment" name="comment"placeholder="Your Message"></textarea>

                        <input type="checkbox" id="check" name="check" required>
                        Save my name, email, and website in this browser for the next time I comment.<br>


                        <button type="submit">Send</button>
                    </form>
                    
                </div>
            </div>
        </div>


        <div class="contact-container">

            <div class="contact-box">
                <img src="https://img.icons8.com/?size=100&id=53439&format=png&color=ff0000" alt="Phone Icon">

                <div class="details">
                    <p>+(94) 720 314412</p>
                    <p>www.clothingcompany.com</p>
                </div>

            </div>

            <div class="contact-box">
                <img src="https://img.icons8.com/?size=100&id=YRRhCXfA0Vd0&format=png&color=ff0000" alt="Mail Icon">

                <div class="details">
                    <p>infoclothingcompany@gmail.com</p>
                    <p>www.clothingcompany.com</p>
                </div>

            </div>


            <div class="contact-box">
                <img src="http://img.icons8.com/?size=100&id=7880&format=png&color=ff0000" alt="Location Icon">

                <div class="details">
                    <p>Pitipana - Thalagala Road </p>
                    <p>Homagama</p>
                </div>
            </div>

            <div class="contact-box">
                <img src="https://img.icons8.com/?size=100&id=10083&format=png&color=ff0000" alt="Clock Icon">
            
                <div class="details">
                    <p>Mon - Sat : 8am - 5pm</p>
                    <p>Sunday : Closed</p>
                    </div>
            </div>

        </div>




    `)
}

export default emaildata;