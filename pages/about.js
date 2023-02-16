import Head from 'next/head'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import TwoColumn from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

const About = () => {
  return (
    <>
      <Container>
        <Head>
          <title>アバウト</title>
        </Head>
        <Hero
          title='About'
          subtitle='About development activities'
        />

        <figure>
          <Image
            src={eyecatch}
            alt=''
            layout='responsive'
            sizes='(min-width: 1152px) 1152px, 100vw'
            priority
            placeholder='blur'
          />
        </figure>
        <TwoColumn>
          <TwoColumn.Main>
            <PostBody>
              <p>
                Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログ
                ラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結び
                つけるクリエイティブを提案し続けています。
              </p>
              <h2>モノづくりで目指していること</h2>
              <p>
                モノづくりではデータの解析からクリエイティブまで幅広いことを担当し
                ています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標
                です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れていま
                す。
              </p>
              <p>
                単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事
                にしながらものづくりをしています。毎回課題解決テーマをもって「モノ」と向き合い制
                作をし、フィードバックしてもらうことで自分の中にあるモヤモヤを言葉にして「問い」
                への答えを出しています。
              </p>
              <h3>新しいことへのチャレンジ</h3>
              <p>
                今までと違うものを作ることで愛着が湧いてきます。そこで興味を持った
                ことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さな
                ヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
              </p>
            </PostBody>
          </TwoColumn.Main>

          <TwoColumn.Sidebar>
            <Contact />
          </TwoColumn.Sidebar>
        </TwoColumn>
      </Container>
    </>
  )
}
export default About
