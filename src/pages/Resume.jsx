
function Resume() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <iframe 
                src="/resume.pdf" 
                style={{ width: '100%', height: '100%' }}
                title="Resume"
            ></iframe>
        </div>
    );
}

export default Resume;