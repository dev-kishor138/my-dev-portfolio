import { Icon } from '@iconify/react/dist/iconify.js';

const Frontend = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Frontend</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="cib:react" />
                        </span>
                        <div>
                            <h3 className="skills-name">React</h3>
                            <span className="skills-level">Expert</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="hugeicons:tailwindcss" />
                        </span>
                        <div>
                            <h3 className="skills-name">Tailwind</h3>
                            <span className="skills-level">Expert</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="akar-icons:redux-fill" />
                        </span>
                        <div>
                            <h3 className="skills-name">Redux</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="teenyicons:nextjs-outline" />
                        </span>
                        <div>
                            <h3 className="skills-name">Next js</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="hugeicons:bootstrap" />
                        </span>
                        <div>
                            <h3 className="skills-name">Bootstrap</h3>
                            <span className="skills-level">Expert</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="mdi:material-ui" />
                        </span>
                        <div>
                            <h3 className="skills-name">Material UI</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;