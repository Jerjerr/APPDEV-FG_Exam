import PropTypes from 'prop-types'
export default function Body(props) {
    return(
        <div className="person">
        <p>{(props.champs).toUpperCase()}</p>
        <p>Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.
            <li>Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.</li>
            <li>Programmable Keys: Assign macros and custom functions to any key with the included software.</li>
            <li>Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.</li></p>
        
        <ul></ul>
        <br/>
        <p><strong>Setup Instructions</strong>
        <ul></ul>
        
Unboxing:

<li>Carefully remove the keyboard and accessories from the box.</li>

Connecting the Keyboard:

<li>Plug the USB cable into an available USB port on your computer.</li>
<li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.
</li>
Software Installation (Optional):
 
<li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.
</li>Follow the on-screen instructions to install the software.
<br></br>
Keycap Removal and Replacement:

<li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.
</li>
<li>Replace keycaps by aligning them over the switch and pressing down until they click into place.
</li>

</p>
<br/>
<p><strong>Using the Keyboard</strong>
        <ul></ul>
        
        Basic Typing:

<li>	Simply start typing; the keyboard is pre-configured with standard key mappings.
</li>
<br></br>
Customizing Backlighting:
<li>	Press Fn + F9 to cycle through preset lighting effects.
</li>
<li>	Use the configuration software to create custom lighting profiles.
</li>

<br></br>Programming Keys:
<li>	Open the configuration software.
</li>
<li>	Select the key you want to program.
</li>
<li>	Assign a macro or function and save your changes.</li>
<br></br>
Using Media Controls:

<li>Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.
</li>

</p>
<br/>
<p><strong>Troubleshooting</strong>
        <ul></ul>
        
        Keyboard Not Responding:

<li>Ensure the USB connection is secure.
</li>	
<li>Try connecting the keyboard to a different USB port.
</li>
<li>Restart your computer if necessary.</li>
<br></br>
Backlighting Not Working:

<li>	Check if the backlight is disabled or set to a minimal brightness level.
</li>
<li>	Verify that the configuration software is properly installed.
</li>
<br></br>
Key Not Registering:

<li>	Confirm that no physical obstructions are affecting the key.
</li>
<li>Test the key in different applications to determine if the issue is software-related.</li>


<br></br>
Maintenance and Care
<br></br>
<li>Cleaning:

Disconnect the keyboard from the computer.
Use a soft, dry cloth to clean the surface.
For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.</li>
<br></br>
Storage:

	<li>Store the keyboard in a cool, dry place.</li>
<li>	Avoid exposure to liquids or extreme temperatures.
</li>

</p>
<br/>
<p><strong>Warranty and Support</strong>
        <ul></ul>
        
        	Warranty Period: 2 years from the date of purchase.
	Customer Support: For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.

Manufacturer’s Website: www.keyboardcompany.com

Customer Support Email: support@keyboardcompany.com

Support Hotline: 1-800-555-1234

“Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!”


</p>
        </div>
        
        
    )
}

Body.propTypes = {
    name: PropTypes.string,
    champs: PropTypes.string,
    imgSrc: PropTypes.string,
    textt: PropTypes.string
}

Body.defaultProps = {
    name: "Goat",
    champs: "unknown",
    age: 40
}