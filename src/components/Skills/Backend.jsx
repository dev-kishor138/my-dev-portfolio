import { SiAxios, SiExpress } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { BiLogoFirebase, BiLogoMongodb, BiLogoNodejs } from 'react-icons/bi';

const Backend = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Backend Developer</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <span className="dev-icons"><BiLogoNodejs /></span>
                        <div>
                            <h3 className="skills-name">Node</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons"><BiLogoMongodb /></span>
                        <div>
                            <h3 className="skills-name">Mongodb</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons"><BiLogoFirebase /></span>
                        <div>
                            <h3 className="skills-name">Firebase</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <span className='dev-icons'> <SiExpress /></span>
                        <div>
                            <h3 className="skills-name">Express</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className='dev-icons'><SiAxios /></span>
                        <div>
                            <h3 className="skills-name">Axios</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className='dev-icons'><GrMysql /></span>
                        <div>
                            <h3 className="skills-name">My Sql</h3>
                            <span className="skills-level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;