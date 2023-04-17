import Link from 'next/link';
import { FC } from 'react';

import styles from './Footer.module.scss'

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <hr />
            <div className={styles.footerContent}>
                <div className={styles.footerColumn}>
                    <p className={styles.footerColumnTitle}>О нас</p>
                    <ul className={styles.footerLinkList}>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">О компании</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Вакансии</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Программа бета-тестирования</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Информация для партнёров</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Размещение рекламы</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Пользовательское соглашение</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Политика конфиденциальности</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Комплаенс</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <p className={styles.footerColumnTitle}>Разделы</p>
                    <ul className={styles.footerLinkList}>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Мой Иви</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Что нового</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Фильмы</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Сериалы</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Мультфильмы</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">ТВ-каналы</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link href="#">Что посмотреть</Link>
                        </li>
                        <li className={styles.footerLinkItem}>
                            <Link className={styles.certificationLink} href="#">Активация сертификата</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <p className={styles.footerColumnTitle}>Служба поддержки</p>
                    <div className={styles.footerColumnDescription}>
                        <span>Мы всегда готовы вам помочь.</span>
                        <span>Наши операторы онлайн 24/7</span>
                    </div>
                    <div className={styles.footerSupport}>
                        <button>Написать в чате</button>
                        <div className={styles.footerSupportButtons}>
                            <button>M</button>
                            <button>P</button>
                        </div>
                        <div className={styles.footerQuestions}>
                            <a href="#">ask.ivi.ru</a>
                            <p>Ответы на вопросы</p>
                        </div>
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerWidget}>
                        <div className={styles.footerWidgetIcon}>

                        </div>
                        <div className={styles.footerWidgetText}>
                            Смотрите фильмы, сериалы и мультфильмы без рекламы
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.footerContentBottom}>
                <div className={styles.footerColumn}>
                    <div className={styles.footerStores}>
                        <button>App Store</button>
                        <button>Play Store</button>
                        <button>Smart Tv</button>
                        <button>Все Устройства</button>
                    </div>
                    <div className={styles.footerCopyrights}>
                        <p>© 2023 ООО «Иви.ру»</p>
                        <p>HBO ® and related service marks are the property of Home Box Office, Inc</p>
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerComunity}>
                        <button>
                            <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                        </button>
                        <button>
                            <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                        </button>
                        <button>
                            <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                        </button>
                        <button>
                            <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                        </button>
                        <button>
                            <img src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/social_odnoklassniki.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
