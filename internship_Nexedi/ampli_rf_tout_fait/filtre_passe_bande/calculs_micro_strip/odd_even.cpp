#include <cstdlib>
#include <cstdio>
#include <vector>
#include <cmath>
#include <iostream>
using namespace std;


//FONCTION QUI CALCULE LA 1ERE STRUCTURE
float first_structure(float g1,float delta){

	return sqrt((3.14*delta)/(2*g1));

}

//FONCTION QUI CALCULE L'ENSEMBLE DES STRUCTURES INTERMEDIAIRES
std::vector<float> intermediates_structures(std::vector<float> v,float delta){
	std::vector<float> resultVector;
	int i=2;

	while(i!= v.size()){
		resultVector.push_back((3.14*delta)/(2*sqrt(v[i]*v[i])));
		i++;
	}	
	return resultVector;
}

//FONCTION QUI CALCULE LA DERNIERE STRUCTURE
float last_struture(float before_last_g , float last_g,float delta){
	return sqrt((3.1*delta)/(2*(before_last_g*last_g)));
}


//CALCULE ET RENVOIE UN VECTOR COMPORTANT TOUTES LES VALEURS D'IMPEDANCES
//IMPAIRES
std::vector<float> odd_impedances(std::vector<float> v){
	std::vector<float> odd_impedances;
	for(auto i : v){
		odd_impedances.push_back(50*(1-(50*i)+((50*i)*(50*i))));
	}
	return odd_impedances;
}

//CALCULE ET RENVOIE UN VECTOR COMPORTANT TOUTES LES VALEURS D'IMPEDANCES
//PAIRES
std::vector<float> even_impedances(std::vector<float> v){
	std::vector<float> even_impedances;
	for(auto i : v){
		even_impedances.push_back(50*(1+(50*i)+((50*i)*(50*i))));
	}
	return even_impedances;
}

int main(){
	float f1 = (1.7*pow(10,9));
	float f2 = (2.1*pow(10,9));
	float w1 = (2*3.14*f1);
	float w2 = (2*3.14*f2);
	float w0 = sqrt(w1*w2);
	int j=2;
	float delta = (w2-w1)/w0;
	std::vector<float> struct_container;

	cout << " " <<endl;
	cout << " " <<endl;
	vector <float> g_params;
	g_params.push_back(1.5963);
	g_params.push_back(1.0967);
	g_params.push_back(1.5963);
	g_params.push_back(0.81419);
	cout << "Calcul pour filtre d'ordre " << g_params.size()-1 << endl;
	cout << "-------------------------------------" <<endl;
	cout << "Calcul pour la 1ère structure : " << first_structure(g_params[0],delta) <<endl;
	cout << "Calcul pour la dernière structure : " << last_struture(g_params[g_params.size()-2],g_params[g_params.size()-1],delta) <<endl; 
	std::vector<float> etagesIntermediraires(intermediates_structures(g_params,delta));
	for(auto i : etagesIntermediraires){
		cout << "Resultat de l'étage " << j << " : " << i <<endl;
		j++;
	}

	//Remplissage du vector contenant tous les Z0ji,i+1
	struct_container.push_back(first_structure(g_params[0],delta));
	for(auto i : etagesIntermediraires){
		struct_container.push_back(i);
	}
	cout << " " <<endl;
	cout << " " <<endl;
	struct_container.push_back(last_struture(g_params[g_params.size()-2],g_params[g_params.size()-1],delta));
	cout << "Calcul des impédances de modes pair et impair " << endl;
	cout << "---------------------------------------" <<endl;
	std::vector<float> odd_impedances_result_vector(odd_impedances(struct_container));
	std::vector<float> even_impedances_result_vector(even_impedances(struct_container));
	cout << "Impédances paires : " <<endl;
	cout << " " <<endl;
	for(auto i : even_impedances_result_vector){
		cout << i << endl;
	}

	cout << " " <<endl;
	cout << "Impédances impaires" <<endl;
	cout << " " <<endl;
	for(auto i : odd_impedances_result_vector){
		cout << i << endl;
	}
	return 0;
}