import { StyleSheet, View, Text, Image, Pressable, Linking, ScrollView, useWindowDimensions} from 'react-native';

export default function Portfolio() {
  const { width } = useWindowDimensions();
  const widthBreakpoint = 768;

  let styles;
  if (width < widthBreakpoint) {
    styles = stylesMobile;
  }
  else {
    styles = stylesWeb;
  }

    return(
    <ScrollView style={styles.container}>
      <View>
          <Text style={styles.h2} id="education">Education</Text>
          <Text style={styles.h4}>California State University, Fresno</Text>
          <Text style={styles.txt}>May 2020</Text>
          <Text style={styles.italic}>Bachelor of Science</Text>
          <Text style={styles.txt}>Computer Science</Text>

          <Text style={styles.h2} id="experience">Experience</Text>
          <Text style={styles.h4}>React & React Native Developer Apprentice</Text>
          <Text style={styles.txt}>September 2021 – Today</Text>
          <Text style={styles.italic}>Alphaworks</Text>
          <ul>
            <li><Text style={styles.txt}>Learned new technologies and developed skills throughout year of <Pressable onPress={() => Linking.openURL(`https://bitwiseindustries.com/services/workforce-training/apprenticeships/`)}><Text style={styles.linkItem}>Bitwise's apprenticeship program</Text></Pressable></Text></li>
            <li><Text style={styles.txt}>Developed numerous React web apps and React Native mobile apps</Text></li>
            <li><Text style={styles.txt}>Worked with other frameworks and tools such as Bootstrap, Expo, Android Studio, and Wordpress</Text></li>
            <li><Text style={styles.txt}>Established team building while closely collaborating and connecting with coworkers as part of an inclusive community</Text></li>
          </ul>

          <Text style={styles.h4}>Web Developer & IT</Text>
          <Text style={styles.txt}>September 2020 – December 2020</Text>
          <Text style={styles.italic}>CBD Center CA LLC</Text>
          <ul>
            <li><Text style={styles.txt}>Fixed, upgraded, redesigned, and maintained main ecommerce website for <Pressable onPress={() => Linking.openURL(`https://cbdcenterca.com/`)}><Text style={styles.linkItem}>CBD Center</Text></Pressable> and optimized their SEO resulting in improved
              user experience and almost double traffic and sales</Text></li>
            <li><Text style={styles.txt}>Developed secondary ecommerce sites for CEO’s other companies using React and Express</Text></li>
            <li><Text style={styles.txt}>Restructured inventory resulting in increased sales and employee ease of use</Text></li>
            <li><Text style={styles.txt}>Managed social media on Facebook, Instagram, Google, and <Pressable onPress={() => Linking.openURL(`https://www.avochato.com/`)}><Text style={styles.linkItem}>Avochato</Text></Pressable> for brand promotion and attracted over 80
              new followers</Text></li>
          </ul>

          <Text style={styles.h2} id="skills">Skills</Text>
          <View style={styles.skills}>
            <View style={styles.skillsItem}>
              <Text style={styles.txt}><Text style={styles.bold}>Languages:</Text> C++, Python, JavaScript, HTML, CSS, SQL</Text>
            </View>
            <View style={styles.skillsItem}>
              <Text style={styles.txt}><Text style={styles.bold}>Frameworks:</Text> React, React Native, Bootstrap, Material-UI, Expo, Node.js, Wordpress</Text>
            </View>
            <View style={styles.skillsItem}>
              <Text style={styles.txt}><Text style={styles.bold}>Developer Tools:</Text> Git, Visual Studio Code, Visual Studio, Android Studio, Jupyter, Google Cloud Platform</Text>
            </View>
            <View style={styles.skillsItem}>
              <Text style={styles.txt}><Text style={styles.bold}>Libraries:</Text> Redux, Pandas, NumPy, Matplotlib, OpenGL</Text>
            </View>
            <View style={styles.skillsItemLong}>
              <Text style={styles.txt}><Text style={styles.bold}>Coursework:</Text> Software Engineering, Web Development, Algorithms & Data Structures, Databases, Data Science &
                Analytics, Operating Systems, Computer Architecture, Computer Simulation, Computer Networks, Finite Automata</Text>
            </View>
          </View>

        <View id="projects">
          <Text style={styles.h2}>Projects</Text>
          <View>
            <View style={styles.projects}>
                <View style={styles.projectItem}>
                    <Pressable onPress={() => Linking.openURL(`https://xmercado.github.io/decidr/`)}>
                      <Image style={styles.img} source={require('../Images/decidr.png')}/>
                    </Pressable>
                    <Text style={styles.projectTitle}>decidr</Text>
                    <Text style={styles.txt}>2021</Text>
                    <View style={styles.links}>
                      <Pressable onPress={() => Linking.openURL(`https://xmercado.github.io/decidr/`)}><Text style={styles.linkItem}>Launch App</Text></Pressable>
                      <Text style={styles.linkItem}> | </Text>
                      <Pressable onPress={() => Linking.openURL(`https://github.com/xmercado/decidr`)}><Text style={styles.linkItem}>GitHub</Text></Pressable>
                    </View>
                    <Text style={styles.italic}>React Native, JavaScript, MUI, HTML, CSS</Text>
                    <ul>
                      <li><Text style={styles.txt}>Learned and utilized React Native and Material UI</Text></li>
                      <li><Text style={styles.txt}>Assessed software development process through project board management</Text></li>
                      <li><Text style={styles.txt}>After quickly implementing minimum functionality, focused on UI and enhancements</Text></li>
                    </ul>
                </View>
                <View style={styles.projectItem}>
                    <Pressable onPress={() => Linking.openURL(`https://github.com/xmercado/CSCI191T-Corona-Weather-Reporters`)}>
                      <Image style={styles.img} source={require('../Images/covid-humidity.png')}/>
                    </Pressable>
                    <Text style={styles.projectTitle}>The Study of Weather Effects on COVID-19</Text>
                    <Text style={styles.txt}>2020</Text>
                    <Pressable onPress={() => Linking.openURL(`https://github.com/xmercado/CSCI191T-Corona-Weather-Reporters`)}><Text style={styles.linkItem}>GitHub</Text></Pressable>
                    <Text style={styles.italic}>Python, Matplotlib, Pandas, NumPy, Jupyter, Git, Discord</Text>
                    <ul>
                      <li><Text style={styles.txt}>Extracted, transformed, and loaded various datasets related to early 2020 COVID-19, mortality rate, humidity level,
                        and ozone level</Text></li>
                      <li><Text style={styles.txt}>Analyzed data to conclude the relation on how various weather climates can affect COVID-19 infection rates</Text></li>
                      <li><Text style={styles.txt}>Collaborated in group of six students and compiled newfound data science results in 5000 word scholarly scientific
                        article and 10 minute video presentation</Text></li>
                      <li><Text style={styles.txt}>Presented article and video to university online seminar with over 200 student and professor attendees</Text></li>
                    </ul>
                </View>
                <View style={styles.projectItem}>
                    <Pressable onPress={() => Linking.openURL(`https://archer-arena.herokuapp.com/`)}>
                      <Image style={styles.img} source={require('../Images/archer-arena.png')}/>
                    </Pressable>
                    <Text style={styles.projectTitle}>Archer Arena</Text>
                    <Text style={styles.txt}>2017 - 2019</Text>
                    <View style={styles.links}>
                      <Pressable onPress={() => Linking.openURL(`https://archer-arena.herokuapp.com/`)}><Text style={styles.linkItem}>Launch App</Text></Pressable>
                      <Text style={styles.linkItem}> | </Text>
                      <Pressable onPress={() => Linking.openURL(`https://github.com/xmercado/archer-arena`)}><Text style={styles.linkItem}>GitHub</Text></Pressable>
                    </View>
                    <Text style={styles.italic}>JavaScript, HTML, CSS, Node.js, Heroku, Git, Discord</Text>
                    <ul>
                      <li><Text style={styles.txt}>Developed persistent online multiplayer web browser shooter battle arena game</Text></li>
                      <li><Text style={styles.txt}>Responsible for Javascript game logic back-end in team of five developers</Text></li>
                      <li><Text style={styles.txt}>Frequently collaborated through Git and Discord and managed project using Agile process and UML diagrams</Text></li>
                      <li><Text style={styles.txt}>Presented game in various build versions four times to class of nearly 50 students allowing audience participation
                        through joining website</Text></li>
                    </ul>
                </View>
            </View> 
          </View>
      </View>
    </View>
  </ScrollView>
  )
}

const stylesMobile = StyleSheet.create({
  container: {
    padding: 12,
  },
  txt: {
    fontSize: 16,
    color: '#FFFFFF',
    margin: 2,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DA0037',
    alignSelf: 'center',
    margin: 4,
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 4,
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  italic: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  img: {
    width: 640,
    height: 480,
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'cover',
  },
  linkItem: {
    fontSize: 16,
    color: '#DA0037',
  },
  skills: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  skillsItem: {
    width: '50%',
    marginBottom: 2,
  },
  skillsItemLong: {
    width: '100%',
    margin: 2,
  },
  links: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  projects: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  projectItem: {
    width: '100%',
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
})

const stylesWeb = StyleSheet.create({
  container: {
    padding: 12,
  },
  txt: {
    fontSize: 16,
    color: '#FFFFFF',
    margin: 2,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DA0037',
    alignSelf: 'center',
    margin: 4,
  },
  h4: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    margin: 4,
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  italic: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  img: {
    width: 640,
    height: 480,
    maxWidth: '100%',
    maxHeight: '100%',
    resizeMode: 'cover',
  },
  linkItem: {
    fontSize: 16,
    color: '#DA0037',
  },
  skills: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  skillsItem: {
    width: '25%',
    marginBottom: 2,
  },
  skillsItemLong: {
    width: '100%',
    margin: 2,
  },
  links: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  projects: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  projectItem: {
    width: '30%',
    margin: 2,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
});