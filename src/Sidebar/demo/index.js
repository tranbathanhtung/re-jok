// @flow
import * as React from 'react';
import Sidebar from '../Sidebar';
import Button from '../../Button/Button';
import MenuDemo from '../../Menu/demo'

type State = {
  open: boolean
}

class SidebarDemo extends React.Component<{}, State>{
  state = {
    open: false
  }
  toggleSidebar = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render(){
    const {open} = this.state;

    return (
      <React.Fragment>
        <div style={{
            display: "flex",
            justifyContent: "center",

          }}>
          <Button onClick={this.toggleSidebar}>Toggle</Button>

        </div>
        <Sidebar

          onToggle={this.toggleSidebar}
          open={open}>
            <MenuDemo/>
        </Sidebar>
        <Sidebar.Content
          open={open}
          mode="push"
          >
          <p style={{fontSize: 16}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra elit a magna molestie rhoncus. Maecenas rhoncus magna sed arcu pellentesque suscipit eget et erat. Suspendisse dignissim mauris a eros varius, non scelerisque urna gravida. Proin ac felis id erat viverra mollis. Donec tincidunt, ante ac elementum commodo, purus eros luctus nisi, at venenatis metus elit in ex. Vestibulum pharetra enim et mollis convallis. Donec mi leo, viverra quis nulla at, pulvinar cursus urna. Sed eget ligula enim. Nunc faucibus ex vitae tempus lobortis.

Fusce bibendum dui ac convallis tincidunt. In enim lectus, sagittis eget aliquam nec, consectetur et lacus. Integer ipsum velit, feugiat vitae mi eget, tincidunt varius lorem. Sed nec enim magna. Nunc aliquam purus quis nisl ultricies, a porttitor nisi feugiat. Donec id erat nec ligula commodo luctus eget viverra ante. Integer facilisis lacus porta ornare gravida. Etiam at arcu ac purus condimentum ultrices.

In eu molestie ex, mollis malesuada mauris. Ut ullamcorper volutpat diam, in convallis sem luctus eget. Curabitur pharetra sit amet velit vel gravida. Sed sed purus et lacus eleifend aliquet eget quis nulla. Phasellus vel arcu odio. Nunc sed purus augue. Nullam vehicula mauris ac justo placerat maximus. Cras dapibus viverra dictum. Aliquam et quam eget urna tempor auctor eu a orci. Aenean varius porta velit, at ultricies quam fermentum eu. Vestibulum scelerisque lacinia eros, eget ullamcorper odio commodo eget. Pellentesque porta fermentum cursus. Proin ac varius est, sit amet volutpat eros. Quisque tincidunt risus vel tellus viverra dictum id ut sapien.

Aliquam feugiat dolor sed rutrum ornare. Praesent scelerisque non eros in pretium. Curabitur feugiat libero dui, non mollis magna cursus nec. Aliquam id nisi sed lacus vulputate congue. Quisque at ullamcorper nunc. Proin tristique at purus eget luctus. Maecenas dapibus ante nunc. Mauris consectetur semper ante eu vulputate. Nunc sodales et arcu nec mollis. Etiam quis eros ut est molestie finibus vel sit amet velit. Vivamus vulputate pharetra maximus.

Integer vestibulum eleifend ante, quis cursus dolor imperdiet ac. Maecenas placerat, tortor ac viverra rhoncus, arcu orci vehicula magna, nec sodales diam purus feugiat risus. Proin sit amet libero sapien. Nulla porta erat felis, et condimentum enim commodo id. Phasellus venenatis dapibus viverra. In ultrices condimentum scelerisque. Nullam elementum, massa et pellentesque pulvinar, nisl ligula egestas elit, vel semper elit diam eleifend mi. Duis quis molestie sem. Duis eu velit maximus, varius ex quis, fermentum purus. Ut a est sed nulla consequat eleifend vel ut nibh. Sed tellus massa, sagittis non pulvinar quis, ultricies quis neque. Sed pharetra, velit in molestie lobortis, tellus elit blandit purus, vitae suscipit tellus purus sed sem. Suspendisse potenti. Phasellus commodo blandit dui, id consequat ipsum vestibulum quis. Morbi sollicitudin, elit ac vestibulum vulputate, lectus mi sodales leo, vel maximus erat nulla in felis.

Nullam ultricies commodo mattis. Nunc aliquam dolor at lorem varius, ac eleifend sapien consequat. Nam dictum tristique mattis. Curabitur eu sollicitudin erat. Donec consequat tellus sit amet laoreet ultricies. Ut eu massa elit. Donec varius velit eu porttitor imperdiet. Morbi malesuada magna id gravida egestas. Ut at facilisis arcu.

Proin hendrerit finibus nunc id pretium. Phasellus laoreet eros id quam iaculis, id porta turpis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla mi, vehicula non quam a, dignissim viverra neque. Vivamus vulputate dolor purus, bibendum interdum mauris mollis efficitur. Phasellus placerat neque augue. Sed eget facilisis libero. Vestibulum semper, neque blandit tempor pulvinar, eros sem pretium elit, quis lobortis massa metus sed justo. Maecenas libero mauris, fringilla eget convallis non, laoreet eu ante. Aenean imperdiet dictum ex, ac pellentesque purus tincidunt quis. Suspendisse quis velit neque. Phasellus nunc orci, ornare sed nunc eu, tincidunt lacinia felis. Integer sollicitudin fringilla nunc, nec faucibus nulla sodales eget. Nullam lobortis eget ex vitae viverra. Cras ut mollis justo.

Aliquam mattis tempor justo non venenatis. Mauris blandit blandit orci eget maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non leo porta, laoreet dui eget, ullamcorper eros. Aliquam consequat nec diam ac varius. Sed commodo ipsum ac purus egestas consectetur. In facilisis lectus sit amet purus eleifend tempus. Maecenas dapibus sapien suscipit nibh elementum aliquet. Nunc lobortis posuere nisi. In ultrices eu enim vel feugiat. Maecenas vitae justo velit. Suspendisse ultricies semper justo accumsan eleifend. Fusce velit eros, scelerisque et sagittis a, vestibulum vitae mi. Fusce ac nunc et nibh iaculis aliquam. In vel nisl finibus, blandit diam in, viverra ex.

Nulla facilisi. Nullam odio purus, bibendum sed rutrum id, suscipit vel magna. Donec id tempor nunc, et dictum odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sed gravida elit. Mauris sapien purus, rutrum id tempor eu, mollis ut purus. Integer sapien tortor, dictum ut mollis at, congue ac nisl. Aliquam erat volutpat. Ut tristique sem orci, sed tincidunt est auctor ut. Vivamus in odio dolor. Proin posuere eget neque vel ultrices.

Vestibulum maximus convallis ultricies. Nullam congue luctus elit et ullamcorper. Nullam in tortor et neque varius mattis sit amet tempus ex. Mauris vestibulum risus sed volutpat suscipit. Nullam tellus tellus, laoreet vitae elit quis, gravida suscipit tortor. Nulla erat erat, venenatis ut turpis in, dictum ultrices ante. Fusce non tristique velit, in suscipit nisi. Phasellus volutpat neque eget pulvinar aliquam.

Duis vel magna pharetra felis consequat semper vel sit amet mi. Maecenas tempus iaculis condimentum. In ultrices ut lorem at viverra. Suspendisse non arcu consequat, cursus mi a, viverra lectus. Aliquam luctus augue non turpis vestibulum finibus. Curabitur et faucibus odio. Integer ut fringilla tellus. Suspendisse quam mi, mattis ut feugiat non, commodo et sem. Nulla in urna nisl. Fusce ac tortor at ante laoreet congue.

Sed interdum nisl massa, non lobortis ligula finibus sed. Duis euismod tempus magna, eget vestibulum erat pulvinar ac. Sed tincidunt aliquet placerat. Vivamus ornare velit non magna euismod, at imperdiet orci ornare. Mauris ut felis scelerisque nulla maximus hendrerit. Maecenas rhoncus arcu bibendum iaculis fringilla. Phasellus fermentum vel metus sit amet sollicitudin. Nulla venenatis leo mi, non consectetur mauris mattis et. Mauris velit urna, pulvinar vel eleifend id, venenatis sed dolor. Ut mattis non nunc in vulputate. Nam imperdiet orci a commodo iaculis. Mauris convallis velit quis sem tempor blandit.

In nulla ante, lacinia nec orci vitae, euismod varius nisl. Etiam ac lectus varius, varius nunc vel, condimentum nibh. Nam condimentum lobortis nisl ut egestas. Ut congue est id ante tempus sollicitudin. Aenean vulputate sapien vel nisl lacinia tincidunt at eu magna. In vestibulum neque in sapien condimentum sagittis. Vivamus aliquam orci nec magna lacinia, ac tristique orci iaculis. Curabitur porttitor fringilla blandit.

Quisque nec imperdiet mauris. Aliquam non lorem sit amet nisl vulputate gravida vitae nec diam. Nunc hendrerit egestas mollis. Curabitur orci neque, varius ut blandit in, consectetur ut lorem. Morbi id augue id diam blandit semper. Sed molestie bibendum tortor, quis porttitor massa tempus at. Integer tincidunt scelerisque est eu aliquet. Duis vitae turpis ac felis porttitor porttitor at et sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus id nisi egestas, malesuada ipsum ac, pellentesque lectus. Suspendisse potenti. Integer semper tellus non mauris hendrerit faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In et ornare turpis, eget pulvinar felis. Curabitur ac finibus mauris. Sed massa ipsum, faucibus at felis non, fringilla pellentesque dui.

Donec pretium turpis volutpat velit hendrerit, porttitor dapibus velit tristique. Morbi quis neque lorem. Maecenas sed vehicula magna, eget eleifend metus. Sed ac ligula quis mauris commodo vestibulum in a risus. Curabitur consequat mauris finibus ipsum consequat, vel venenatis turpis euismod. Mauris suscipit lacinia lacus, vel dictum nisl porttitor ut. Fusce eu mauris imperdiet, sollicitudin lacus a, malesuada nibh. Praesent a urna nec sapien accumsan ullamcorper vel vitae tortor. Aenean tincidunt odio non diam auctor ultrices. Curabitur laoreet, dolor sed porttitor efficitur, nisi nibh interdum nisl, ut semper augue odio et nibh.

Duis blandit a risus eu maximus. Sed consequat ex eget aliquam fringilla. Morbi sed auctor augue, sed pellentesque est. Aliquam sodales augue velit, ac tempor lorem feugiat at. Integer laoreet congue velit. Ut scelerisque felis sit amet mi vehicula vulputate. Nunc bibendum bibendum odio, vel blandit ex. In sit amet consectetur sem. Donec interdum, quam eu condimentum aliquam, felis tellus egestas lacus, quis hendrerit ligula elit in massa.

Sed finibus enim ut velit efficitur efficitur. Integer ac tellus nunc. Maecenas efficitur mi nibh, sed auctor mi dapibus nec. Nunc vulputate lorem vitae odio sagittis luctus. Praesent laoreet justo nec nisl dapibus tincidunt. Morbi accumsan eu velit id semper. Curabitur sollicitudin eleifend fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat suscipit elit sed ornare. Vivamus sit amet imperdiet est. Aliquam auctor mollis enim, ac tempor nisi aliquet vitae.

Nunc vitae tellus congue, sodales erat eget, viverra est. Nulla nec arcu at nibh facilisis tristique sit amet id odio. Vestibulum sodales gravida enim, id pulvinar dui. Donec vitae mi velit. Phasellus ac nulla sit amet nisi auctor faucibus. Suspendisse potenti. Etiam feugiat quam id pellentesque aliquet. Sed lacus mauris, cursus vel urna vel, placerat scelerisque nulla. Nulla sit amet dolor id eros ultrices viverra et dapibus ligula. Duis rhoncus vehicula nulla, commodo fermentum lectus volutpat id. Suspendisse potenti. Vivamus placerat odio ligula, ut tristique eros auctor eget.

Pellentesque vel ligula ullamcorper, auctor ligula posuere, aliquam ligula. Nunc et orci at eros porttitor eleifend ac sit amet turpis. Vestibulum sodales et ipsum sed lacinia. Nullam vehicula vel erat a vestibulum. Maecenas elit diam, auctor non ullamcorper a, semper at odio. Duis rhoncus tortor quis libero placerat consectetur. Suspendisse ac metus vel odio fringilla ullamcorper.

Vivamus tortor erat, lobortis at est eu, tempus malesuada orci. Vestibulum id dui velit. Vestibulum tincidunt eu turpis eu finibus. Mauris urna felis, luctus nec magna id, placerat convallis felis. Sed efficitur mi vel mauris fringilla, ut blandit urna sollicitudin. Aenean pellentesque viverra sem, eget cursus nisl tempus quis. Quisque bibendum dui enim, eu ultricies urna dictum a. Integer congue blandit urna, in suscipit arcu vehicula vitae. Morbi sit amet arcu nec nisi luctus sagittis vel ut magna.

Vivamus gravida vel magna posuere bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi euismod bibendum nibh ac elementum. Aenean fringilla ut orci vel malesuada. Quisque commodo, urna tristique lacinia efficitur, dui eros feugiat felis, eu elementum neque sem quis neque. Etiam pellentesque erat mauris, nec aliquam ipsum lacinia sed. Integer pulvinar rhoncus velit eu aliquam. Phasellus aliquet lacus non odio dapibus aliquet. Nulla sit amet turpis eu ante molestie ultrices. Sed elit turpis, suscipit sed tincidunt quis, vulputate sed odio. Duis eget rhoncus diam.

Curabitur enim ipsum, ultrices ut risus sed, faucibus tristique odio. Vivamus elementum magna quis mollis ultrices. Donec quis turpis volutpat, dictum enim eu, auctor erat. Proin aliquet mauris velit, vitae sollicitudin lectus consectetur et. Donec eleifend est sed libero viverra, in malesuada lacus tincidunt. Nulla rhoncus, lorem non dapibus faucibus, eros nulla tempus enim, ut finibus felis nisl nec justo. Pellentesque ipsum ligula, venenatis a semper a, auctor et nibh. Aliquam ornare, ante sed auctor pellentesque, enim quam vulputate massa, non venenatis turpis sapien a tortor.

Vivamus viverra massa in ipsum efficitur elementum. Etiam a pretium elit, ac porta nunc. Integer sollicitudin, nunc in faucibus fermentum, lorem magna tincidunt risus, vitae tincidunt ex orci a libero. Sed ut ante sit amet nunc facilisis imperdiet. Aliquam vitae arcu et neque rhoncus iaculis sed id urna. Nunc sit amet viverra dolor. Curabitur eu urna consectetur, vehicula purus nec, iaculis purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Duis lacinia ligula vitae mi ornare imperdiet. Ut ac cursus tortor, ut sodales metus. Etiam sit amet nibh ultricies, tempor eros blandit, molestie risus. Etiam tincidunt felis lobortis, dapibus quam ut, sodales mauris. Suspendisse rhoncus quis arcu a viverra. Phasellus ullamcorper lacus est, sed pellentesque purus tincidunt vitae. Cras quis hendrerit ante. Ut euismod feugiat sem, tempus eleifend nisl egestas et.

In ac nibh ornare, pellentesque arcu vitae, scelerisque risus. Maecenas eget ligula diam. Sed tincidunt, lorem id molestie ornare, sapien felis dapibus libero, nec maximus elit tortor ac velit. Maecenas lobortis sapien sed felis facilisis, nec finibus turpis dignissim. Nullam commodo laoreet massa nec placerat. Nunc convallis risus et eros elementum pharetra. Suspendisse mollis et massa id tincidunt. Phasellus pharetra urna elementum mauris feugiat feugiat. Sed aliquet felis sed tortor interdum aliquet a a velit. Praesent nec mi in leo interdum dictum.

In a sapien feugiat, ullamcorper est ultrices, elementum justo. Donec id ornare leo, vitae rhoncus est. Quisque vitae diam vel tellus vestibulum consequat vel id lacus. Maecenas congue lectus ut tellus malesuada lacinia. Proin vitae dolor odio. Praesent porttitor in lectus non luctus. Praesent sem erat, bibendum ut bibendum at, aliquet sed diam. Sed est metus, finibus non pulvinar et, posuere nec ligula. Ut a eros nisi. Vestibulum quis ornare lacus. Aenean semper faucibus dolor, sit amet ultricies purus ultricies ac. Sed purus quam, pretium vitae facilisis in, blandit ac mi. Nam aliquam felis nec lacus laoreet, a blandit lorem aliquet. Nullam interdum, enim non aliquet dapibus, arcu augue fringilla mauris, vitae lacinia libero felis a ipsum. Aliquam nec sagittis quam.

In in imperdiet lorem, vitae porta dui. Donec volutpat malesuada orci eu dapibus. Suspendisse ultricies venenatis ante, eget auctor nulla facilisis in. Proin sit amet sodales arcu, sit amet viverra nisi. Cras accumsan, risus id scelerisque hendrerit, lacus quam viverra magna, sed pellentesque ante ligula sit amet velit. Aliquam id hendrerit augue. Praesent tempor sit amet lectus nec viverra. Nulla tincidunt faucibus urna, eu varius dolor iaculis a. Sed lacinia enim lorem, a accumsan risus sollicitudin at. Proin et arcu ac mi tincidunt tincidunt eu at nulla. Proin facilisis turpis nec risus convallis, sollicitudin efficitur quam pretium. Pellentesque at arcu tortor. Nunc rutrum, erat sit amet varius tempus, ante libero porta leo, sit amet varius augue libero vel justo. Sed eu libero ac tortor euismod sodales ac vitae nibh. Fusce ornare dolor pretium, tincidunt justo ut, posuere turpis.
          </p>
        </Sidebar.Content>
      </React.Fragment>

    )
  }
}

export default SidebarDemo
