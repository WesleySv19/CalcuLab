import { useState, useEffect } from "react"
import styles from './Quotes.module.css'
import { motion } from "framer-motion"

const quotes = [
    "A matemática é a música da razão. - James Joseph Sylvester",
    "Sem a matemática, não há arte. - Luca Pacioli",
    "A educação é o movimento das trevas para a luz. - Allan Bloom",
    "O que sabemos é uma gota; o que ignoramos é um oceano. - Issac Newton",
    "O importante é não parar de questionar. - Albert Einstein",
    "A simplicidade é o último grau de sofisticação. - Leonardo da Vinci",
]

export default function QuoteRotator() {
    const [currentQuote, setCurrentQuote] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length)
        }, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <motion.p key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }} 
                className={styles.quote}>
                {quotes[currentQuote]}
            </motion.p>
        </>
    )
}