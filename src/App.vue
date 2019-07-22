<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#about">
        <span class="d-block d-lg-none">Welcome to my portfolio</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/logo.png" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <div class="subheading mb-5">{{ address }}
            <a href="mailto:name@email.com">{{ email }}</a>
          </div>
          <p class="mb-5">{{ aboutMe }}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a  target="_blank" href="https://www.linkedin.com/in/kunnikannan">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a  target="_blank"  href="https://github.com/krisunni">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.description">
            <div class="resume-content mr-auto">
              <div  class="d-flex justify-content-between">
                <h3 class="position">{{ job.position }}</h3>
                <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
              </div>
              <div class="d-flex justify-content-start">{{ job.company }}</div>
              <div>
                <p>{{ job.description }}</p>
                <p v-if="job.projects">Notable Projects</p>
                <div class="card" id="projects">
                  <div v-for="(project, index) in job.projects" :key="project.name" class="card">
                    <a data-toggle="collapse" data-parent="#projects" :href="'#collapse-'+index" class="card-header">
                    <div class="d-flex justify-content-between">
                      <div class="panel-title">
                        <span data-toggle="collapse" data-parent="#projects" :href="'#collapse-'+index">{{project.name}}</span>
                      </div>
                      <span  :id="'collapse-'+index" v-if="project.startDate" class="panel-collapse collapse out">{{ project.startDate }} - {{ project.endDate }}</span>
                    </div>
                    </a>
                    <div :id="'collapse-'+index" class="panel-collapse collapse in">
                      <div class="card-body">
                        <div class="resume-item d-flex flex-column flex-md-row">
                          <p v-if="project.description" class="p-1 card-subtitle"> {{ project.description }}</p>
                        </div>
                        <ul class="fa-ul mb-0">
                          <li v-for="keyTask in project.keyTasks" :key="keyTask"  class="card-text"><i class="fa-li fa fa-check-square"></i>{{ keyTask }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Western Kentucky University</h3>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science and Physics</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">August 2008 - August 2012</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Sharjah Indian School</h3>
              <div class="subheading mb-3">Computer Science Program</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">June 2006 - June 2008</span>
            </div>
          </div>

        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicons devicons-java"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-docker"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-javascript"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-angular"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-sass"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-less"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-linux"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-database"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-aws"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-oracle-plain-wordmark"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicons-nodejs"></i>
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i>
              Tech Lead/Team lead
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Full Stack Development
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Agile Development, Kanbaan &amp; Scrum
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Integration/SDLC
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>I enjoy learning new frameworks, programming languages and emerging technology. I believe the solutions and
            systems are living breathing code that constantly needs to be patched, upgraded and sometimes rewritten</p>
          <p class="mb-0">When I am not glued to the screen, I enjoy spending time with my wife and our Husky Chow
            puppy Loki. </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import data from './assets/data.json'

export default {
  data () {
    return data
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
}
</script>

<style src="./assets/resume.css"></style>
