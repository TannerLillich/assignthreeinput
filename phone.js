function mainDialerCallback( e )
{
	console.log( e );
	document.getElementById( "dialer-input" ).value += e.target.innerText;
}

function dialCallback( e )
{
	alert( "dialing" );	
}

function clearCallback( e )
{
	document.getElementById( "dialer-input" ).value = "";
}

function addContactCallback( e )
{
	var tr = document.createElement( "tr" );
	tr.innerHTML
		= "<td>"
		+ "<img src='https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png' style='height:1em;' alt='contact icon' title='contact icon'>"
		+ "</td><td>"
		+ document.getElementById( "add-contact-name" ).value
		+ "</td><td>"
		+ "<a href=tel:"+(v=document.getElementById( "add-contact-phone" ).value)+">"+v+"</a>"
		+ "</td><td>"
		+ "<a href=mailto:"+(v=document.getElementById( "add-contact-email" ).value)+">"+v+"</a>"
		+ "</td>";
	// c.innerText = document.getElementById( "add-contact-name" ).value;
	// c.classList.add( "contact-list-entry" );
	// c.classList.add( "ui-button" );

	document.querySelector( "#contacts-table > tbody" ).appendChild( tr );
}

function addContactClearCallback( e )
{
	for( var i of document.getElementsByClassName( "add-contact-inputs" ) )
		i.value = "";
}


var buttons = document.createElement( "div" );
buttons.id = "dialer-buttons";

for( var c of "123456789*0#" )
{
	var b = document.createElement( "button" );
	b.innerText = c;
	b.accessKey = c;
	b.classList.add( "main-dialer-buttons" );
	b.classList.add( "ui-button" );
	b.addEventListener( "click", mainDialerCallback );

	buttons.appendChild( b );
}

var b = document.createElement( "button" );
b.innerText = "Dial";
b.accessKey = "z";
b.classList.add( "dial-clear-buttons" );
b.classList.add( "ui-button" );
b.addEventListener( "click", dialCallback );
buttons.appendChild( b );

var b = document.createElement( "button" );
b.innerText = "Clear";
b.accessKey = "x";
b.classList.add( "dial-clear-buttons" );
b.classList.add( "ui-button" );
b.addEventListener( "click", clearCallback );
buttons.appendChild( b );

document.getElementById( "dialer" ).appendChild( buttons );



$( document ).ready( function()
{
	$( "#tabs" ).tabs();

	document.querySelector( "#tabs > ul" ).setAttribute( "role", "navigation" );
} );