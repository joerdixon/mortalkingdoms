import React from 'react';

// The Home (Landing) page will contain information about the purpose and contents of the website.

// It should contain a cool splash image and links to the coolest parts of the website and a devlog.

function Home() {
    // TODO: Character, Artifact, and Faction of the day sections.
    return (
        <div className='flex flex-col h-[80vh] items-center justify-evenly'>
            <h1 className='text-6xl'>Welcome to the Mortal Kingdoms</h1>
            <p className='mt-20'>The Mortal Kingdoms was created in 20XX by CSank as a campaign setting and has evolved into a sprawling world with secrets to uncover and many untold tales waiting to unfold.</p>
            <p>This website serves as a living archive for the history of the Mortal Kingdoms.</p>
        </div>
    )
};

export default Home;