import Seo from "@/components/Seo";

export default function About() {
    return (
            <div>
                <Seo title="About" />
                <h1 className="active">This is about</h1>
                <a>A TAG</a>

                <style jsx>{`
                    nav {
                        background-color: blue;
                    }
                    a {
                        color: yellow;
                    }
                `}</style>
            </div>
    );
}