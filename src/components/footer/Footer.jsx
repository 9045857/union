function Footer() {
    return (
        <footer className='page-footer #ec407a pink lighten-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    © {new Date().getFullYear()} Copyright ООО "СанАзияТранс"
                    <a
                        className='grey-text text-lighten-4 right'
                        href='https://github.com/9045857/react-food'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
