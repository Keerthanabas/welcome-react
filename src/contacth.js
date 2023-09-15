import React from "react";


const Contact = () => {
    return (
        
        <div>
            <h1>Contact Me</h1>
            <h2>If you have any queries please reach out me via Below details</h2>

            <h3>Your Deatils</h3>
        <div>
            
            <form>
            <table>
                <tr>
               <td> Name : </td>
                <td><input type = "text" placeholder="Enter Your Name" id = "name" name = "name" autoComplete="off"/> </td><br></br>
                </tr>
                <tr>
                <td>Email: </td>
               <td> <input type = "email" placeholder="Enter Your Email"id = "email" name = "email" autoComplete="off"/></td> <br></br>
                </tr>
                <tr>
               <td> Phone no :</td>
                <td><input type = "tel" placeholder="Enter Your Phone" id = "phone" name = "phone"/></td><br></br>
                </tr>
                <tr>
               <td> Message :</td>
               <td> <textarea type ="message" placeholder="Message" name = "message" rows="3"></textarea></td> <br></br>
                </tr>
                <button type = "submit" >Submit</button>
            </table>
            </form>
            
            </div>
            <h3>My Contact Information</h3>
            <address>
                10/21 old library Street,<br></br>
                Athanur(PO),<br></br>
                Rasipuram(TK),<br></br>
                Namakkal(DT),
                Phone : <a href = "tel:9944848064">9944848064</a>
                Email: <a href = "mailid:bkeerthanaeee@gmail.com">bkeerthanaeee@gmail.com</a>
            </address>
        </div>   
            
    )

}
export default Contact;