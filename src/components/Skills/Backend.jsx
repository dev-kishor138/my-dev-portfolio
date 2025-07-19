import { Icon } from '@iconify/react/dist/iconify.js';

const Backend = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Backend</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="mdi:laravel" />
                        </span>
                        <div>
                            <h3 className="skills-name">Laravel</h3>
                            <span className="skills-level">Expert</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="simple-icons:mongodb" />
                        </span>
                        <div>
                            <h3 className="skills-name">Mongodb</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="simple-icons:express" />
                        </span>
                        <div>
                            <h3 className="skills-name">Express</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="teenyicons:firebase-outline" />
                        </span>
                        <div>
                            <h3 className="skills-name">Firebase</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="akar-icons:node-fill" />
                        </span>
                        <div>
                            <h3 className="skills-name">Node Js</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="lineicons:mysql" />
                        </span>
                        <div>
                            <h3 className="skills-name">My Sql</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="simple-icons:postgresql" />
                        </span>
                        <div>
                            <h3 className="skills-name">PostgreSQL</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                    <div className="skills-data">
                        <span className="dev-icons">
                            <Icon icon="hugeicons:api" />
                        </span>
                        <div>
                            <h3 className="skills-name">RESTful APIs</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Backend;