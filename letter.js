var i = 0;
var txt1 = "Heluuu Miss Nandiniii...!  >> Apologiesss for the delayyy. Alsoo, Idiot, I know you.> Toh stop justifying your actions when > you share your number > with anyone. bigg idiottt! >> Lately you havee been chaging your DPs a lot. And stating the obvious, you look amazing in all of themmm, with your smile being the prettiest among all!! Are you impressing that bumble guyy? XD >> That said, Thank youuu for being there when things were rough for mee. You legit have no clue how much you've helped mee. The best thing about our friendship is that I can always trust youu Miss Nandini !! >> And also thank youu for bearing mee and my super power to make things awkward. You know I'm an idiot and still am learning da but you among the few people around whom I open upp puura mast 😁😁 >> So here is my promiseee for ya, if you ever need helppp, I'll be there. Even if I'll be helpless, wouldn't let ya be alone and be right there by your side. >>  Now your turn. Help me smooth talk with women so that I'll have soooo many girlfriends. Or better help me find them XD";
var speed = 50;
typeWriter();
function typeWriter() {
    if (i < txt1.length) {        
        if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
        else if(txt1.charAt(i)=='>')
            document.getElementById("text1").innerHTML += '</br>'
        else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
