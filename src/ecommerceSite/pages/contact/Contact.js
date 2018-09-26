import React from 'react';

const Contact = () => {
    return(
        <main>
            <div class="heroImg">
                <div class="heroImg--text">
                    <h1>Have A Question?</h1>
                    <h2>Please leave us a message.</h2>
                </div>
            </div>
            <div className="contactForm--box">
                <form className="contactForm" name="contactForm" action="#" method="post"> 
                    <div className="contactForm--input">
                        <label for="name">First Name:</label>
                        <input id="name" type="text" name="name" value="" placeholder="Type your full name here" />
                    </div>
                    <div className="contactForm--input">
                        <label for="email">Email:</label>
                        <input id="email" type="text" name="email" value="" placeholder="Email" />
                    </div>
                    <div className="contactForm--input">
                        <label for="phone">Phone:</label>
                        <input id="phone" type="text" name="phone" value="" placeholder="Phone" />
                    </div>
                    <div className="contactForm--input">
                        <label for="dropdown">Subject:</label>
                        <select id="dropdown" name="dropdown">
                            <option value="">What Do You Need Help With?</option>
                            <option value="">Item Came Defective/Want to Return</option>
                            <option value="">Can't Find Item/Item Delivery is Late</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="contactForm--input">
                        <label for="comments">Comments:</label>
                        <textarea cols="50" rows="10" id="comments" placeholder="Please let us know anything that could help us respond to your request" name="essay"></textarea>
                    </div>
                    <div className="contactForm--btn">
                        <input type="submit" name="submit" />
                        <input type="reset" name="submit" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Contact;