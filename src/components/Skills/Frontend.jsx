import { BiLogoBootstrap, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { AiFillHtml5 } from 'react-icons/ai';

const Frontend = () => {
    return (
        <div className="skills-content">
            <h3 className="skills-title">Frontend Developer</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <span className="dev-icons"><AiFillHtml5 /></span>
                        <div>
                            <h3 className="skills-name">HTML</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons"><BiLogoCss3 /></span>
                        <div>
                            <h3 className="skills-name">CSS</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons"><BiLogoJavascript /></span>
                        <div>
                            <h3 className="skills-name">Javascript</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <span className="dev-icons"><BiLogoBootstrap /></span>
                        <div>
                            <h3 className="skills-name">Bootstrap</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons"><BiLogoTailwindCss /></span>
                        <div>
                            <h3 className="skills-name">Tailwind</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills-data">
                        <span className="dev-icons"><BiLogoReact /></span>
                        <div>
                            <h3 className="skills-name">React</h3>
                            <span className="skills-level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;