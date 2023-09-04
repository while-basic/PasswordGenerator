import { Icon } from "@iconify/react"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center py-2 mt-auto font-text">
            <p className="text-lg">Developed by <span className="font-bold">C. Celaya</span></p>
            <div className="flex justify-center gap-2 text-6xl">
                <a href="https://github.com/while-basic/passwordgenerator"><Icon icon="mdi:github" /></a>
                <a href="https://www.linkedin.com/in/christophercelaya/"><Icon icon="mdi:linkedin" /></a>
            </div>
        </footer>
    )
}
export default Footer