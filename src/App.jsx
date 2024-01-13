/* global Calendly */

import david from "./assets/david-marshall.png";

export default function App() {
  return (
    <div className="p-8 flex flex-col">
      <div className="">
        <img
          src={david}
          className="sm:h-[400px] md:h-[500px] mb-8 rounded-full shadow-xl"
        />
      </div>
      <div>
        <h1 className="text-4xl underline">David Marshall</h1>
        <h3 className="text-xl mb-12">Teaching Assisant @ Correlation One</h3>

        <div className="mb-8">
          Welcome to my TA page! I'm excited to be working with you over the
          next six months! I'm sure you have a lot of questions, and I'm here to
          help however I can.
        </div>

        <div className="mb-8">
          <h2 className="text-3xl mb-4 underline">About me:</h2>
          <div className="mb-4">
            <ol className="list-disc ml-4">
              <li className="mb-4">
                My background is a bit unorthodox. I'm largely self-taught: I
                learned HTML when I was a kid (back in the 90s), didn't stick
                with it, started a coding bootcamp in 2021 while I was a car
                salesman, made it 20% of the way through, and landed my first
                job. I've never stopped learning since.
              </li>
              <li className="mb-4">
                As for experience, I've been a professional software engineer
                for two years now. My first job was with a start-up (six
                months), and now I'm a Software Engineer I with H&R Block (1 1/2
                years), where I work mostly in Angular (frontend), but also code
                in C# (backend).
              </li>
              <li className="mb-4">
                At my job, though, I do more than code. I spend a few hours per
                week mentoring other developers, and I'm also involved with
                developing the curriculum for the next batch of associate
                software engineers.
              </li>
              <li className="mb-4">
                This is my second cohort with Correlation One, and hopefully not
                my last! In addition, I'm also helping with refining/refactoring
                the existing curriculum. (If you notice any Lord of the Rings
                references, that's most likely me.)
              </li>
              <li className="mb-4">
                Outside of that, I do a little bit of freelance development work
                as well. Most of my coding there is in React (frontend), but
                I've also developed in Python/Flask (backend) and Mongo
                (database) as well.
              </li>
              <li className="mb-4">
                Most importantly, I've been blessed with an amazing family: a
                wife of nearly ten years, an 8 year-old son, and 3 year-old
                daughter. They are my "why", which you'll learn is important to
                succed in this discipline.
              </li>
            </ol>
          </div>
        </div>

        <div className="mb-8">
          As for the course itself, and software engineering as a whole, I've
          seen what works and what doesn't, and while I cannot make you succeed,
          I can definitely share what I feel to be the best practices, habits,
          and disciplines to develop during this course. This is not an
          exhaustive list, but I hope it helps!
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-3xl underline">What to do:</h2>
          <ol className="list-disc ml-4">
            <li className="mb-4">
              <strong>Practice, practice, practice.</strong> Learning to code
              requires you thinking, yes, but unless your fingers are moving,
              whether that's with a keyboard or a pen or paper, it won't click.
              This is not a solely "cerebral" skillset. It's a fully embodied
              one. The "basics" you'll be learning are principles you'll be
              utilizing throughout your entire career. Better learn them know
              than to not know them later! (Plus, you'll learn coding is fun.)
            </li>
            <li className="mb-4">
              <strong>Set time aside.</strong> On that note, here's the truth of
              the matter: you cannot expect to put in the bare minimum and
              succeed. This class is meant to be a jumping-off point, not the
              end-all, be-all. Don't get me wrong: considering you're here, it
              means you have a full-time job you're managing on top of this
              class, not to mention any other responsibilities you might have on
              your plate. This is why it's good to be intentional about your
              schedule and carving out the time to better your life. Maybe it
              means cutting out an hour of Netflix or TikTok each day. Isn't
              that worth it if it means you get to better your situation? And
              keeping that in mind...
            </li>
            <li className="mb-4">
              <strong>Find your why.</strong> You joined this class because you
              wanted to improve yourself, your career, your family's situation,
              etc. Whatever that reason is? Write it down. Put it somewhere
              you'll see it every day. Don't lose sight of that purpose, because
              when things get hard (and they will), you'll need something to
              reignite that inspiration, especially when the excuses creep in.
              (Again- they will. Trust me.) My why? My family deserves a
              husband/father who can provide for them and be more present. And
              so far, I'm succeeding.
            </li>
            <li className="mb-4">
              <strong>Embrace the friction.</strong> Something I've learned over
              the years is to not shy away from friction, from moments when
              things seem to be too tough to continue. Whether you're working
              out and building muscles, or pushing through a tough time in a
              relationship, being uncomfortable isn't inherently a bad thing. In
              fact, it often means you're growing! If you're finding the
              material to be difficult, don't fret. I guarantee you're not
              alone. Reach out to a friend, a mentor, your TA (which is most
              likely me). Lean on others, but also remember when you've hit that
              seemingly-insurmountable wall, it doesn't mean you're never going
              to succeed. Take this moment to pause, reflect, re-assess, even
              take a break. I can speak from experience: walking away from a
              problem for a few minutes (or even sleeping on it) can do wonders!
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-3xl underline">Office hours:</h2>
          <p className="mb-4">
            One of the things I love about working with Correlation One is being
            able to have one-on-one meetings with my students, which we
            typically call "office hours." This is where if you need more
            hands-on help, or if you just need someone to talk to about your
            journey, all you need to do is set up some time by clicking the{" "}
            <strong>SCHEDULE</strong> button below. That said, if you want to
            meet with me, but don't see a time that works for you? Just message
            me on Slack, and I'll do my best to accommodate your schedule.
          </p>
          <p className="mb-4">
            What I will say is now that I've worked with one cohort already, the
            most successful students are the ones who took the time to set up
            regular office hours. This is because as you're learning a brand new
            skillset, you're inevitably going to have questions. And while I
            wholeheartedly recommend taking the time to search for your answers
            on Google, there will be certain things that require a more personal
            touch, and let's be honest: Slack is not a true replacement for
            human-to-human interaction.
          </p>
          <div className="">
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                const script = document.createElement("script");
                script.src =
                  "https://assets.calendly.com/assets/external/widget.js";
                document.body.appendChild(script);
                script.onload = () =>
                  Calendly.initPopupWidget({
                    url: "https://calendly.com/dmarshall-c-one/30min",
                  });
              }}
            >
              {" "}
              <button className="w-full md:w-1/4 bg-blue-300 rounded-full p-4 shadow-xl hover:bg-blue-500 hover:text-white">
                SCHEDULE
              </button>
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-3xl underline">Any other questions?</h2>Find
          me on Slack and let me know. I'm excited to be working with you!
        </div>
      </div>
    </div>
  );
}
